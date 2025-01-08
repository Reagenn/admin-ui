// import fs from "fs";
// import path from "path";

// // Root directory of your project
// const rootDir = "./src";

// // Function to scan files recursively
// const scanFiles = (dir) => {
//   const files = fs.readdirSync(dir);
//   let results = [];
//   for (const file of files) {
//     const filePath = path.join(dir, file);
//     const stat = fs.statSync(filePath);

//     if (stat.isDirectory()) {
//       results = results.concat(scanFiles(filePath));
//     } else if (file.endsWith(".js") || file.endsWith(".jsx") || file.endsWith(".tsx")) {
//       results.push(filePath);
//     }
//   }
//   return results;
// };

// // Function to extract imports
// const extractImports = (filePath) => {
//   const content = fs.readFileSync(filePath, "utf8");
//   const importRegex = /import\s.*\sfrom\s["'](.*)["']/g;
//   let match;
//   const imports = [];

//   while ((match = importRegex.exec(content)) !== null) {
//     imports.push(match[1]);
//   }

//   return imports;
// };

// // Main function to map relationships
// const mapComponentRelationships = () => {
//   const files = scanFiles(rootDir);
//   const relationships = {};

//   for (const file of files) {
//     const relativePath = path.relative(rootDir, file);
//     relationships[relativePath] = extractImports(file);
//   }

//   return relationships;
// };

// // Run the function and print results
// const relationships = mapComponentRelationships();
// console.log(JSON.stringify(relationships, null, 2));
