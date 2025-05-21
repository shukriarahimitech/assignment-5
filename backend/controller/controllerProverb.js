
import proverbs from '../data/proverbs.js';
export const getAllProverbs = (req, res) => {
    // Import the proverbs data

    // Send the proverbs data as a JSON response
    res.json(proverbs);
    }

/*************  ✨ Windsurf Command 🌟  *************/
    export const randomAllProverbs = (req, res) => {
        const { id } = req.params;
        const proverb = proverbs.find(proverb => proverb.id === parseInt(id, 10));
        if (proverb) {
            res.json(proverb);
        } else {
            res.status(404).json({ message: 'Proverb not found' });
        }
    }
/*******  b4dbe8bf-5b38-44a4-a430-1779f8e90ab2  *******/    
    export const getAllProverbsByCategory = (req, res) => {
        
}
              

    