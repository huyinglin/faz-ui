const fs = require("fs");
const path = require("path");
const chalk = require('chalk');
const argv = require('yargs').alias('n', 'name').argv;

const componentName = argv.name;
const componentPath = path.join(__dirname,  `../src/components/${componentName}`);

function generateComponentDirectory() {
  if (fs.existsSync(componentPath)) {
    console.log(chalk.red(`error`) + ` The ${componentName} component already exists!`);
    return;
  }

  fs.mkdirSync(componentPath);

  templateMain();
  templateMarkdown();
  templateIndex();
  templateStyle();
  templateInterface();
  templateTest();

  console.log(
    '\n' +
    chalk.green('success') +
    ` ${componentName} component created successfully.` +
    ` Check out to: "/src/components/${componentName}".` +
    '\n'
  );
}

function templateMain() {
  const template = fs.readFileSync(path.join(__dirname, `../template/Button.tsx`), "utf-8")
    .replace(/\$\$component_name/g, componentName)
    .replace(/\$\$component_displayName/g, componentName)
    .replace(/\$\$component_props/g, `${componentName}Props`);

  fs.writeFileSync(path.join(componentPath, `${componentName}.tsx`), template);
  console.log(chalk.cyan('Done') + ` ${componentName}.tsx`);
}

function templateMarkdown() {
  const template = fs.readFileSync(path.join(__dirname, `../template/button.md`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(componentPath, `${componentName.toLowerCase()}.md`), template);
  console.log(chalk.cyan('Done') + ` ${componentName.toLowerCase()}.md`);
}

function templateIndex() {
  const template = fs.readFileSync(path.join(__dirname, `../template/index.tsx`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(componentPath, 'index.tsx'), template);
  console.log(chalk.cyan('Done') + 'index.tsx');
}

function templateStyle() {
  const template = fs.readFileSync(path.join(__dirname, `../template/style.ts`), "utf-8");

  fs.writeFileSync(path.join(componentPath, 'style.ts'), template);
  console.log(chalk.cyan('Done') + ` style.ts`);
}

function templateInterface() {
  const template = fs.readFileSync(path.join(__dirname, `../template/interface.ts`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(componentPath, 'interface.ts'), template);
  console.log(chalk.cyan('Done') + ` interface.ts`);
}

function templateTest() {
  const testPath = path.join(componentPath, '__tests__');
  fs.mkdirSync(testPath);
  const template = fs.readFileSync(path.join(__dirname, `../template/__tests__/index.test.tsx`), "utf-8")
    .replace(/\$\$component_name/g, componentName);

  fs.writeFileSync(path.join(testPath, `${componentName}.test.tsx`), template);
  console.log(chalk.cyan('Done') + ` __tests__`);
}

generateComponentDirectory();
