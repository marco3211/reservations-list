const { readJSONFile } = require("../utils/utils.js");
const logger = require("../middlewares/logger.js");

const determineStatus = (charge) => {
  if (!charge) {
    return "unknown";
  }
  return charge.active ? "active" : "cancelled";
};

// Function to merge data based on matching IDs
const mergeData = (assignments, charges) => {
  return assignments.map((assignment) => {
    const charge = charges.find(
      (charge) => charge.special_product_assignment_id === assignment.id
    );
    return {
      ...assignment,
      status: determineStatus(charge),
      charge: charge ? charge.amount : 0,
    };
  });
};

// Function to group data by reservation UUID
const groupDataByUUID = (mergedData) => {
  const groupedData = new Map();

  mergedData.forEach(({ reservation_uuid, status, charge, name }) => {
    if (!groupedData.has(reservation_uuid)) {
      groupedData.set(reservation_uuid, {
        reservationUUID: reservation_uuid,
        activePurchases: 0,
        sumOfActiveCharges: 0,
        products: [],
      });
    }

    const group = groupedData.get(reservation_uuid);
    if (status === "active") {
      group.activePurchases += 1;
      group.sumOfActiveCharges += charge;
    }
    group.products.push({ name, status, charge });
  });

  return Array.from(groupedData.values());
};

// Controller function to handle the request
const getProcessedData = async (req, res, next) => {
  try {
    const productAssignment = await readJSONFile(
      "./data/product_assignment.json"
    );
    const productCharges = await readJSONFile("./data/product_charges.json");

    const mergedData = mergeData(productAssignment, productCharges);
    const result = groupDataByUUID(mergedData);

    logger.info("Processed data successfully");
    res.json(result);
  } catch (err) {
    logger.error("Error processing data", err);
    next(err);
  }
};

module.exports = { getProcessedData };
