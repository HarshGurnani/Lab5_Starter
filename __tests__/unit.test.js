// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

test("checks if (925)-789-8897 is a valid phone number", () => {
  expect(isPhoneNumber("(925)-789-8897")).toBe(true);
});

test("checks if 9257898897 is a valid phone number", () => {
  expect(isPhoneNumber(9257898897)).toBe(false);
});

test("checks if 925-789-8897 is a valid phone number", () => {
  expect(isPhoneNumber("925-789-8897")).toBe(true);
});

test("checks if (925)7898897 is a valid phone number", () => {
  expect(isPhoneNumber("(925)7898897")).toBe(false);
});

test("checks if hgurnani@ucsd.edu is a valid email", () => {
  expect(isEmail("hgurnani@ucsd.edu")).toBe(true);
});

test("checks if h-gurnani@ucsd.edu is a valid email", () => {
  expect(isEmail("h-gurnani@ucsd.edu")).toBe(false);
});

test("checks if hgurnani@ucsd.edu.com is a valid email", () => {
  expect(isEmail("hgurnani@ucsd.edu.com")).toBe(false);
});

test("checks if Hgurnani@ucsd.edu is a valid email", () => {
  expect(isEmail("Hgurnani@ucsd.edu")).toBe(true);
});

test("checks if greatpassword is a strong password", () => {
  expect(isStrongPassword("greatpassword")).toBe(true);
});

test("checks if no is a strong password", () => {
  expect(isStrongPassword("no")).toBe(false);
});

test("checks if node&4 is a strong password", () => {
  expect(isStrongPassword("node&4")).toBe(false);
});

test("checks if hello_42 is a strong password", () => {
  expect(isStrongPassword("hello_42")).toBe(true);
});

test("checks if 12/20/2024 is a valid date", () => {
  expect(isDate("12/20/2024")).toBe(true);
});

test("checks if 2/5/1989 is a valid date", () => {
  expect(isDate("2/5/2024")).toBe(true);
});

test("checks if 12/300/1989 is a valid date", () => {
  expect(isDate("12/300/1989")).toBe(false);
});

test("checks if 12-30-1989 is a valid date", () => {
  expect(isDate("12-30-1989")).toBe(false);
});

test("checks if #f497d2 is a valid hex color", () => {
  expect(isHexColor("#f497d2")).toBe(true);
});

test("checks if 0f5 is a valid hex color", () => {
  expect(isHexColor("0f5")).toBe(true);
});

test("checks if g90 is a valid hex color", () => {
  expect(isHexColor("g90")).toBe(false);
});

test("checks if #795d9e7 is a valid hex color", () => {
  expect(isHexColor("#795d9e7")).toBe(false);
});
