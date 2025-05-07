import { bookData } from "@/lib/bookData";


export default function handler(req,res) {
  if(req.method === "GET"){
    res.status(200).json(bookData);
  }else{
    res.status(405).json({ message: 'Method Not Allowed' });
  }

}
