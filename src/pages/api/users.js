export default function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, email, password, confirmpassword } = req.body;

      if (!name || !email || !password || !confirmpassword) {
        return res.status(400).json({ message: "Please fill all fields" });
      }

      if (password !== confirmpassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }

      return res
        .status(200)
        .json({ message: "Your information is recorded successfully" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
