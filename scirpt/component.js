const fs = require("fs");
const path = require("path");
const chalk = require('chalk');
const argv = require('yargs').alias('n', 'name').argv;
const ora = require('ora');

const componentName = argv.name;
const componentPath = path.join(__dirname,  `../src/components/${componentName}`);

function generateComponentDirectory() {
  if (fs.existsSync(componentPath)) {
    console.log(chalk.red(`error`) + ` The ${componentName} component already exists!`);
    return;
  }

  const spinner = ora('Generating template code files').start();

  fs.mkdirSync(componentPath);

  templateMain();
  templateMarkdown();
  templateIndex();
  templateStyle();
  templateInterface();
  templateTest();

  spinner.succeed(`${componentName} component created successfully. Check out to: "/src/components/${componentName}".`);
}

function templateMain() {
  const template = fs.readFileSync(path.join(__dirname, `../template/Button.tsx`), "utf-8")
    .replace(/\$\$component_name/g, componentName)
    .replace(/\$\$component_displayName/g, componentName)
    .replace(/\$\$component_props/g, `${componentName}Props`);

  fs.writeFileSync(path.join(componentPath, `${componentName}.tsx`), template);
}

function templateMarkdown() {
  const template = fs.readFileSync(path.join(__dirname, `../template/button.md`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(componentPath, `${componentName.toLowerCase()}.md`), template);
}

function templateIndex() {
  const template = fs.readFileSync(path.join(__dirname, `../template/index.tsx`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(componentPath, 'index.tsx'), template);
}

function templateStyle() {
  const template = fs.readFileSync(path.join(__dirname, `../template/style.ts`), "utf-8");

  fs.writeFileSync(path.join(componentPath, 'style.ts'), template);
}

function templateInterface() {
  const template = fs.readFileSync(path.join(__dirname, `../template/interface.ts`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(componentPath, 'interface.ts'), template);
}

function templateTest() {
  const testPath = path.join(componentPath, '__tests__');
  fs.mkdirSync(testPath);
  const template = fs.readFileSync(path.join(__dirname, `../template/__tests__/index.test.tsx`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(testPath, `${componentName}.test.tsx`), template);
}

generateComponentDirectory();
