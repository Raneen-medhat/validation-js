/**
 * Regex pattern for full english characters
 */
export const character = /^[a-zA-Z]+$/;

/**
 * Regex pattern for numbers
 */
export const number = /^[0-9]+$/;

/**
 * Regex pattern for valid email
 */
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/

/**
 * Regex pattern for arabic numbers
 */
export const arNumbers = ['٠', '١' , '٢','٣' ,'٤', '٥', '٦', '٧', '٨','٩'];

/**
 * Regex pattern for valid saudi mobile number
 */
export const saudiMobile = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;

/**
 * Regex pattern for arabic numbers
 */
export const arNumber  = /^[\u0621-\u064A]$/;
