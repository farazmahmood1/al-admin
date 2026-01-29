import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDhRu_7L42mPBna9NIU6QUJxz42QTpm9Q",
    authDomain: "huzaifa-karigar.firebaseapp.com",
    projectId: "huzaifa-karigar",
    storageBucket: "huzaifa-karigar.firebasestorage.app",
    messagingSenderId: "798815308866",
    appId: "1:798815308866:web:50fe4cb95c444613e071db",
    measurementId: "G-GZ507XTC4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const INITIAL_SKILLS = [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Painter",
    "AC Technician",
    "Welder",
    "Mason",
    "Gardener",
    "Cleaner",
    "Home Appliance Repair"
];

async function seedDatabase() {
    console.log('🌱 Starting database seed...');

    try {
        // 1. Seed Skills
        console.log('🛠 Seeding Skills...');
        const skillsRef = doc(db, 'skills', 'global');
        await setDoc(skillsRef, {
            skills: INITIAL_SKILLS,
            updatedAt: new Date().toISOString()
        }, { merge: true });
        console.log('✅ Skills collection seeded.');

        // 2. Create sample Admin Action (to initialize collection)
        console.log('📝 Initializing adminActions collection...');
        await addDoc(collection(db, 'adminActions'), {
            action: 'system_init',
            details: 'Database structure initialized',
            createdAt: new Date(),
            adminId: 'system'
        });
        console.log('✅ adminActions collection initialized.');

        // 3. Create dummy Dispute (to initialize collection)
        // We won't create a real one to avoid clutter, but we'll check if we can write
        console.log('⚖️ Initializing disputes collection...');
        // Only creating a doc if needed, but for now just logging that we know about it.
        // In Firestore, collections technically exist only when they have documents.
        // We'll create a "placeholder" doc and then delete it? No, let's keep it simple.
        // The previous steps proved we can write to 'users'.
        // The previous steps showed 'ratings' and 'bookings' are standard collections.

        console.log('✅ Database seeding completed successfully!');
        console.log('The following collections are now ready for use:');
        console.log(' - users (Admin created previously)');
        console.log(' - skills (Populated with defaults)');
        console.log(' - adminActions (Initialized)');
        console.log(' - bookings (Will be created when first booking is made)');
        console.log(' - ratings (Will be created when first rating is given)');
        console.log(' - disputes (Will be created when first dispute is filed)');

    } catch (error) {
        console.error('❌ Error seeding database:', error);
    }
}

seedDatabase();
