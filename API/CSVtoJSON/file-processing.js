const fs = require('fs');
const csv = require('csvtojson');

// Function to transform CSV to JSON
async function transformCSVtoJSON(inputPath, outputPath) {
  try {
    // Check if the input file exists
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file not found: ${inputPath}`);
    }

    // Convert CSV to JSON
    const jsonArray = await csv().fromFile(inputPath);

    // Write JSON to output file
    fs.writeFile(outputPath, JSON.stringify(jsonArray, null, 2), (err) => {
      if (err) {
        throw new Error(`Error writing JSON file: ${err.message}`);
      }
      console.log(`JSON file has been saved to ${outputPath}`);
    });

  } catch (error) {
    console.error(`Error processing file: ${error.message}`);
  }
}

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node file-processing.js <input_csv_file_path> <output_json_file_path>');
  process.exit(1);
}

const [inputPath, outputPath] = args;

transformCSVtoJSON(inputPath, outputPath);
