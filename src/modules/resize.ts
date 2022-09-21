import sharp from 'sharp';


async function resize(width:number,height:number,filename:string,outputFile:string) {
    try{
        
        await sharp(`images/${filename}`).resize({height:height, width:width}).toFile(`images/editedImages/${outputFile}`)
               
    } catch(error) {
        console.log(error);

    }

}
export default resize