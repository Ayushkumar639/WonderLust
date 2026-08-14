const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
    console.log("Connected to DB");
}

main()
    .then(() => updateCategories())
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close());

async function updateCategories() {
    await Listing.updateMany(
        { title: { $in: ['Cozy Beachfront Cottage', 'Beachfront Paradise', 'Beachfront Bungalow in Bali', 'Beachfront Villa in Greece', 'Secluded Beach House in Costa Rica', 'Luxury Villa in the Maldives'] } },
        { $set: { category: 'Amazing Pools' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Mountain Retreat', 'Mountain View Cabin in Banff', 'Rustic Log Cabin in Montana', 'Ski Chalet in Aspen', 'Ski-In/Ski-Out Chalet', 'Lakefront Cabin in New Hampshire'] } },
        { $set: { category: 'Mountains' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Modern Loft in Downtown', 'Luxury Penthouse with City Views', 'Historic Brownstone in Boston', 'Art Deco Apartment in Miami', 'Modern Apartment in Tokyo'] } },
        { $set: { category: 'Iconic Cities' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Cozy Beachfront Cottage', 'Beachfront Paradise', 'Beachfront Bungalow in Bali', 'Beachfront Villa in Greece', 'Secluded Beach House in Costa Rica', 'Luxury Villa in the Maldives', 'Tropical Villa in Phuket', 'Private Island Retreat'] } },
        { $set: { category: 'Trending' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Historic Villa in Tuscany', 'Historic Canal House', 'Charming Cottage in the Cotswolds', 'Historic Castle in Scotland', 'Historic Cottage in Charleston'] } },
        { $set: { category: 'Castels' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Secluded Treehouse Getaway', 'Eco-Friendly Treehouse Retreat'] } },
        { $set: { category: 'Dome' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Rustic Cabin by the Lake', 'Lakefront Cabin in New Hampshire'] } },
        { $set: { category: 'Camping' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Safari Lodge in the Serengeti'] } },
        { $set: { category: 'Farms' } }
    );
    
    await Listing.updateMany(
        { title: { $in: ['Desert Oasis in Dubai'] } },
        { $set: { category: 'Archetic' } }
    );
    
    console.log('Categories updated!');
}