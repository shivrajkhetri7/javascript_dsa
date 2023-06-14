const data = {
  name: "shivraj",
  surname: "khetri",
  phone: "883034****",
  address: {
    city: "pune",
    village: "Katraj",
    street: "Sundarnagar mangadewadi",
    pincode: "411046",
    name: "akash",
  },
  getfullName: function () {
    return `${this.name} ${this.surname}`;
  },
};

/**
 * Get all the keys from data Object
 */

console.log("keys", Object.keys(data));

/**
 * Values of keys
 */

console.log("values", Object.values(data));

/**
 * array of object
 */

console.log("array", Object.entries(data));

/**
 *  delete
 */

console.log(delete data.phone);
console.log(data);

/**
 * Calling function
 */

console.log(data.getfullName());

/**
 *  get all the name
 */
let list = [];
function getAllkeys(data) {
  if (data.hasOwnProperty("name")) {
    list.push(data.name);
  }

  for (keys in data) {
    if (typeof data[keys] == "object") {
      return getAllkeys(data[keys]);
    }
  }
  return list;
}

console.log(getAllkeys(data));
