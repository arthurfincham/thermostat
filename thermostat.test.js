const Thermostat = require('./thermostat');

describe("changing temperature", () => {
  const thermo = new Thermostat();
  it("it begins at 20 deg", () => {
    expect(thermo.getTemperature()).toEqual(20);
  });

  it("can increase in temperature", () => {
    thermo.up();
    thermo.up();
    expect(thermo.getTemperature()).toEqual(22);
  });

  it("can decrease in temperature", () => {
    thermo.down();
    expect(thermo.getTemperature()).toEqual(21);
  });

});