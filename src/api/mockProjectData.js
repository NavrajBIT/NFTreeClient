export const mockProjects = [
  {
    id: 1,
    name: "NAGGW-NGR-KANO-Dambatta-FAGWALAWA",
    description:
      "A large-scale reforestation project in the Green Valley region, focusing on restoring native tree species and creating sustainable ecosystems.",
    type: 3,
    investment_type: "Carbon Credits",
    area: 5,
    age: 2,
    plant_planned: 2000,
    donation: 10,
    coordinates: "12.3084° N, 8.65676° E",
    address: "Green Valley, Dhaka",
    city: "KANO",
    country: "Nigeria",
    pin_code: "1207",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    revenue_dist_date: "2025-01-01",
    revenue_dist_details: "Annual distribution based on carbon credit sales",
    roi: "15%",
    phase: 1,
    donation_method: 1,
    currency: "USD($)",
    funding: {
      total: 100000,
      raised: 75000
    },
    species: {
      species: [
        {plant: "NEEM", percentage: 40},
        {plant: "Jackfruit", percentage: 30},
        {plant: "Neem", percentage: 30}
      ]
    },
    org_name: "Green Earth Foundation",
    org_description: "A non-profit organization dedicated to environmental conservation",
    org_website: "www.greenearth.org",
    org_address: "123 Green Street, Dhaka",
    org_country: "Bangladesh",
    org_pin_code: "1207",
    org_reg_id: "REG123456",
    carbonCredit_enabled: true
  },
  {
    id: 2,
    name: "Urban Tree Initiative",
    description:
      "Planting and maintaining trees in urban areas to improve air quality and provide shade in the city.",
    type: 2,
    investment_type: "Donation",
    area: 25,
    age: 1,
    plant_planned: 5000,
    donation: 15,
    coordinates: "22.5726° N, 88.3639° E",
    address: "Kolkata City Center",
    city: "Kolkata",
    country: "India",
    pin_code: "700001",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
    revenue_dist_date: "2024-06-01",
    revenue_dist_details: "Quarterly maintenance reports",
    roi: "N/A",
    phase: 1,
    donation_method: 1,
    currency: "USD($)",
    funding: {
      total: 75000,
      raised: 45000
    },
    species: {
      species: [
        {plant: "Banyan", percentage: 50},
        {plant: "Peepal", percentage: 50}
      ]
    },
    org_name: "Urban Green Society",
    org_description: "Dedicated to making cities greener and more sustainable",
    org_website: "www.urbangreen.org",
    org_address: "456 Park Avenue, Kolkata",
    org_country: "India",
    org_pin_code: "700001",
    org_reg_id: "REG789012",
    carbonCredit_enabled: false
  },
  {
    id: 3,
    name: "Coastal Mangrove Project",
    description:
      "Restoring mangrove forests along the coastline to protect against erosion and support marine life.",
    type: 1,
    investment_type: "Monitoring",
    area: 100,
    age: 3,
    plant_planned: 20000,
    donation: 0,
    coordinates: "19.0760° N, 72.8777° E",
    address: "Mumbai Coastal Area",
    city: "Mumbai",
    country: "India",
    pin_code: "400001",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
    revenue_dist_date: "N/A",
    revenue_dist_details: "Monitoring reports only",
    roi: "N/A",
    phase: 1,
    donation_method: 1,
    currency: "USD($)",
    funding: {
      total: 0,
      raised: 0
    },
    species: {
      species: [
        {plant: "Rhizophora", percentage: 40},
        {plant: "Avicennia", percentage: 30},
        {plant: "Sonneratia", percentage: 30}
      ]
    },
    org_name: "Coastal Conservation Trust",
    org_description: "Protecting and restoring coastal ecosystems",
    org_website: "www.coastaltrust.org",
    org_address: "789 Beach Road, Mumbai",
    org_country: "India",
    org_pin_code: "400001",
    org_reg_id: "REG345678",
    carbonCredit_enabled: false
  }
];
