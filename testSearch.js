const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
    console.log("Connected to DB");
}

main()
    .then(() => testSearch())
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close());

async function testSearch() {
    // Test search for "beach"
    const beachResults = await Listing.find({ 
        $or: [
            { title: { $regex: 'beach', $options: 'i' } },
            { description: { $regex: 'beach', $options: 'i' } },
            { location: { $regex: 'beach', $options: 'i' } },
            { country: { $regex: 'beach', $options: 'i' } }
        ]
    });
    console.log(`Search "beach": ${beachResults.length} results`);
    beachResults.forEach(r => console.log(`  - ${r.title} (${r.location}, ${r.country})`));
    
    // Test category filter "Trending"
    const trendingResults = await Listing.find({ category: 'Trending' });
    console.log(`\nCategory "Trending": ${trendingResults.length} results`);
    trendingResults.forEach(r => console.log(`  - ${r.title} (${r.category})`));
    
    // Test combined search + category
    const combinedResults = await Listing.find({ 
        category: 'Trending',
        $or: [
            { title: { $regex: 'beach', $options: 'i' } },
            { description: { $regex: 'beach', $options: 'i' } },
            { location: { $regex: 'beach', $options: 'i' } },
            { country: { $regex: 'beach', $options: 'i' } }
        ]
    });
    console.log(`\nCombined (Trending + "beach"): ${combinedResults.length} results`);
    combinedResults.forEach(r => console.log(`  - ${r.title} (${r.category})`));
    
    // Test category "Mountains"
    const mountainsResults = await Listing.find({ category: 'Mountains' });
    console.log(`\nCategory "Mountains": ${mountainsResults.length} results`);
    mountainsResults.forEach(r => console.log(`  - ${r.title} (${r.category})`));
}