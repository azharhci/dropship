
console.log('Script loaded');
const logicMap = [
    { budget: 'Under 2k', timeInvestment: 'Below 5 hours', interest: 'Tech Gadgets', techSavviness: 'Beginner', marketingSkills: 'Beginner', targetCustomer: 'Students', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Phone Cases' },
    // ... Add other combinations similarly ...
    { budget: '5k to 10k', timeInvestment: 'Below 5 hours', interest: 'Food & Beverage', techSavviness: 'Intermediate', marketingSkills: 'Expert', targetCustomer: 'Parents', salesChannel: 'Own Website', timeToStartEarning: 'ASAP', riskLevel: 'Moderate', topPriority: 'Profit Margin', suggestion: 'Kids\' Snacks' },
    // ... Continue adding all combinations ...
    { budget: 'Under 2k', timeInvestment: 'Below 5 hours', interest: 'Tech Gadgets', techSavviness: 'Beginner', marketingSkills: 'Beginner', targetCustomer: 'Students', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Phone Cases' },
    { budget: '5k to 10k', timeInvestment: '> 10 hours', interest: 'Health & Wellness', techSavviness: 'Intermediate', marketingSkills: 'Expert', targetCustomer: 'Working Professionals', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Building a Brand', suggestion: 'Yoga Mats' },
    { budget: '2k to 5k', timeInvestment: '5-10 hours', interest: 'Food & Beverage', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Homeowners', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Sales Volume', suggestion: 'Organic Teas' },
    { budget: 'Under 2k', timeInvestment: 'Below 5 hours', interest: 'Fashion', techSavviness: 'Beginner', marketingSkills: 'Beginner', targetCustomer: 'Students', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Fashion Jewelry' },
    { budget: '5k to 10k', timeInvestment: '5-10 hours', interest: 'Home Decor', techSavviness: 'Intermediate', marketingSkills: 'Beginner', targetCustomer: 'Homeowners', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Sales Volume', suggestion: 'Wall Art' }
 ,{ budget: '2k to 5k', timeInvestment: '> 10 hours', interest: 'Beauty Products', techSavviness: 'Expert', marketingSkills: 'Expert', targetCustomer: 'Working Professionals', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Building a Brand', suggestion: 'Organic Skincare' },
    { budget: 'Under 2k', timeInvestment: 'Below 5 hours', interest: 'Pet Care', techSavviness: 'Beginner', marketingSkills: 'Intermediate', targetCustomer: 'Pet Owners', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Pet Toys' },
    { budget: '5k to 10k', timeInvestment: '5-10 hours', interest: 'Sports & Outdoor', techSavviness: 'Intermediate', marketingSkills: 'Beginner', targetCustomer: 'Fitness Enthusiasts', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Sales Volume', suggestion: 'Camping Gear' },
    { budget: '2k to 5k', timeInvestment: 'Below 5 hours', interest: 'Arts & Crafts', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Parents', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Building a Brand', suggestion: 'Craft Kits' },
    { budget: 'Under 2k', timeInvestment: '> 10 hours', interest: 'Travel', techSavviness: 'Beginner', marketingSkills: 'Expert', targetCustomer: 'Students', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Travel Accessories' },
    { budget: '5k to 10k', timeInvestment: 'Below 5 hours', interest: 'Tech Gadgets', techSavviness: 'Intermediate', marketingSkills: 'Beginner', targetCustomer: 'Working Professionals', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Sales Volume', suggestion: 'Smart Plugs' },
    { budget: '2k to 5k', timeInvestment: '5-10 hours', interest: 'Fashion', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Homeowners', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Building a Brand', suggestion: 'Designer Bags' },
    { budget: 'Under 2k', timeInvestment: '5-10 hours', interest: 'Health & Wellness', techSavviness: 'Beginner', marketingSkills: 'Beginner', targetCustomer: 'Seniors', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Herbal Supplements' },
    { budget: '5k to 10k', timeInvestment: '> 10 hours', interest: 'Food & Beverage', techSavviness: 'Intermediate', marketingSkills: 'Expert', targetCustomer: 'Fitness Enthusiasts', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Building a Brand', suggestion: 'Protein Shakes' },
    { budget: '2k to 5k', timeInvestment: 'Below 5 hours', interest: 'Beauty Products', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Pet Owners', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Sales Volume', suggestion: 'Makeup Kits' },
    { budget: 'Under 2k', timeInvestment: '5-10 hours', interest: 'Pet Care', techSavviness: 'Beginner', marketingSkills: 'Intermediate', targetCustomer: 'Parents', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Pet Apparel' },

    { budget: '5k to 10k', timeInvestment: '5-10 hours', interest: 'Tech Gadgets', techSavviness: 'Intermediate', marketingSkills: 'Beginner', targetCustomer: 'Homeowners', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Sales Volume', suggestion: 'Wi-Fi Extenders' },
    { budget: '2k to 5k', timeInvestment: 'Below 5 hours', interest: 'Fashion', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Pet Owners', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Building a Brand', suggestion: 'Fashionable Pet Clothes' },
    { budget: 'Under 2k', timeInvestment: '> 10 hours', interest: 'Health & Wellness', techSavviness: 'Beginner', marketingSkills: 'Expert', targetCustomer: 'Fitness Enthusiasts', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Workout Bands' },
    { budget: '5k to 10k', timeInvestment: 'Below 5 hours', interest: 'Food & Beverage', techSavviness: 'Intermediate', marketingSkills: 'Beginner', targetCustomer: 'Parents', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Sales Volume', suggestion: 'Baby Foods' },
    { budget: '2k to 5k', timeInvestment: '5-10 hours', interest: 'Beauty Products', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Seniors', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Building a Brand', suggestion: 'Anti-Aging Creams' },
    { budget: 'Under 2k', timeInvestment: '5-10 hours', interest: 'Pet Care', techSavviness: 'Beginner', marketingSkills: 'Intermediate', targetCustomer: 'Students', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Pet Snacks' },
    { budget: '5k to 10k', timeInvestment: '> 10 hours', interest: 'Sports & Outdoor', techSavviness: 'Intermediate', marketingSkills: 'Expert', targetCustomer: 'Working Professionals', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Building a Brand', suggestion: 'Sports Apparel' },
    { budget: '2k to 5k', timeInvestment: 'Below 5 hours', interest: 'Arts & Crafts', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Homeowners', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Sales Volume', suggestion: 'Home Craft Kits' },
    { budget: 'Under 2k', timeInvestment: '5-10 hours', interest: 'Travel', techSavviness: 'Beginner', marketingSkills: 'Beginner', targetCustomer: 'Fitness Enthusiasts', salesChannel: 'Social Media', timeToStartEarning: 'ASAP', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Travel Books' },
    { budget: '5k to 10k', timeInvestment: 'Below 5 hours', interest: 'Tech Gadgets', techSavviness: 'Intermediate', marketingSkills: 'Beginner', targetCustomer: 'Pet Owners', salesChannel: 'Own Website', timeToStartEarning: 'In a few months', riskLevel: 'Moderate', topPriority: 'Sales Volume', suggestion: 'Pet Tech Gadgets' },
    { budget: '2k to 5k', timeInvestment: '5-10 hours', interest: 'Fashion', techSavviness: 'Expert', marketingSkills: 'Intermediate', targetCustomer: 'Seniors', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Building a Brand', suggestion: 'Comfortable Fashion' },
    { budget: 'Under 2k', timeInvestment: '5-10 hours', interest: 'Pet Care', techSavviness: 'Beginner', marketingSkills: 'Expert', targetCustomer: 'Seniors', salesChannel: 'Social Media', timeToStartEarning: 'In a few months', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Senior Pet Products' },
    { budget: '2k to 5k', timeInvestment: 'Below 5 hours', interest: 'Sports & Outdoor', techSavviness: 'Expert', marketingSkills: 'Beginner', targetCustomer: 'Students', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Sales Volume', suggestion: 'Student Sports Gear' },
    { budget: '5k to 10k', timeInvestment: '5-10 hours', interest: 'Arts & Crafts', techSavviness: 'Intermediate', marketingSkills: 'Expert', targetCustomer: 'Working Professionals', salesChannel: 'Own Website', timeToStartEarning: 'ASAP', riskLevel: 'Moderate', topPriority: 'Building a Brand', suggestion: 'Office Craft Supplies' },
    { budget: 'Under 2k', timeInvestment: 'Below 5 hours', interest: 'Travel', techSavviness: 'Beginner', marketingSkills: 'Intermediate', targetCustomer: 'Homeowners', salesChannel: 'Social Media', timeToStartEarning: 'In a few months', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Home Travel Kits' },
    { budget: '2k to 5k', timeInvestment: '> 10 hours', interest: 'Tech Gadgets', techSavviness: 'Expert', marketingSkills: 'Beginner', targetCustomer: 'Fitness Enthusiasts', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Sales Volume', suggestion: 'Fitness Tech' },

    { budget: '2k to 5k', timeInvestment: '> 10 hours', interest: 'Tech Gadgets', techSavviness: 'Expert', marketingSkills: 'Beginner', targetCustomer: 'Fitness Enthusiasts', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Sales Volume', suggestion: 'Fitness Tech' },
    { budget: '5k to 10k', timeInvestment: '5-10 hours', interest: 'Fashion', techSavviness: 'Intermediate', marketingSkills: 'Intermediate', targetCustomer: 'Pet Owners', salesChannel: 'Own Website', timeToStartEarning: 'ASAP', riskLevel: 'Moderate', topPriority: 'Building a Brand', suggestion: 'Pet-Friendly Fashion' },
    { budget: 'Under 2k', timeInvestment: 'Below 5 hours', interest: 'Health & Wellness', techSavviness: 'Beginner', marketingSkills: 'Intermediate', targetCustomer: 'Seniors', salesChannel: 'Social Media', timeToStartEarning: 'In a few months', riskLevel: 'Low', topPriority: 'Profit Margin', suggestion: 'Senior Wellness Products' },
    { budget: '2k to 5k', timeInvestment: '5-10 hours', interest: 'Food & Beverage', techSavviness: 'Expert', marketingSkills: 'Beginner', targetCustomer: 'Students', salesChannel: 'Marketplace', timeToStartEarning: 'No hurry', riskLevel: 'High', topPriority: 'Sales Volume', suggestion: 'Student Food Kits' },
    { budget: '5k to 10k', timeInvestment: 'Below 5 hours', interest: 'Beauty Products', techSavviness: 'Intermediate', marketingSkills: 'Intermediate', targetCustomer: 'Working Professionals', salesChannel: 'Own Website', timeToStartEarning: 'ASAP', riskLevel: 'Moderate', topPriority: 'Building a Brand', suggestion: 'Workplace Beauty Kits' }



];

document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("suggestionForm");

form.addEventListener("submit", submitQuiz);
console.log('Form loaded');

function submitQuiz(event) {
    event.preventDefault();
    // document.getElementById('result').innerText = 'Product/Niche Suggestion: ' + result;
    console.log(event);
    const form = document.getElementById('suggestionForm');
    const formData = new FormData(form);

    // Extract answers
    const answers = {
        budget: formData.get('budget'),
        timeInvestment: formData.get('timeInvestment'),
        interest: formData.get('interest'),
        techSavviness: formData.get('techSavviness'),
        marketingSkills: formData.get('marketingSkills'),
        targetCustomer: formData.get('targetCustomer'),
        salesChannel: formData.get('salesChannel'),
        timeToStartEarning: formData.get('timeToStartEarning'),
        riskLevel: formData.get('riskLevel'),
        topPriority: formData.get('topPriority')

    };

    // Match answers with logic map
    console.log(answers)
    let result = 'No matching suggestion found.';
    for (let entry of logicMap) {
        if (Object.keys(answers).every(key => answers[key] === entry[key])) {
            result = entry.suggestion;
            console.log(entry);
            break;
        }
    }

    // Display result
    document.getElementById('result').innerText = 'Product/Niche Suggestion: ' + result;
    document.getElementById('suggestionForm').reset();

}
});