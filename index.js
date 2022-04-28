// required stuff
const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');
const generateHtml = require('./src/page-template');

// import modules from classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

