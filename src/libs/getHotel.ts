
export default async function getHotel(id:string){

    const response = await fetch(`${process.env.BACKEND_URL}/api/hotels/${id}`)
    if(!response.ok){
        throw new Error("Failed to fecth hotel");
    }

    return await response.json();
}