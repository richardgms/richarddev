import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'd:/Workspace/richarddev/public/assets/images/Cards';
const files = ['cicerocard.png', 'estigacard.png', 'joandersoncard.png', 'josicard.png', 'leilanecard.png', 'nutriboxcard.png'];

async function run() {
    for (const f of files) {
        try {
            const p = path.join(dir, f);
            if (fs.existsSync(p)) {
                const out = p.replace('.png', '.webp');
                await sharp(p).webp({ quality: 80 }).toFile(out);
                fs.unlinkSync(p);
                console.log('Converted and deleted ' + f);
            }
        } catch (e) {
            console.error('Error converting ' + f, e);
        }
    }

    // Delete unused files
    try {
        fs.unlinkSync(path.join(dir, 'richardcard.png'));
        console.log('Deleted richardcard.png');
    } catch (e) { }

    try {
        const rootImgDir = 'd:/Workspace/richarddev/public/assets/images';
        fs.unlinkSync(path.join(rootImgDir, 'profile.jpg'));
        console.log('Deleted profile.jpg');
    } catch (e) { }
}
run();
