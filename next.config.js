/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts')
const withTM = require('next-transpile-modules')(['@react95/core', '@react95/icons'])

module.exports = withTM(withFonts())
