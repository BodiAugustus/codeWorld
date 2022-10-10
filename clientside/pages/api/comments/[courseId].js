import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db.util';
async function handler(req, res) {
  const courseId = req.query.courseId;
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'POST') {
    //add server-side validation
    const { email, name, text, parentName, parentPhone, studentAge } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === '' ||
      !parentName ||
      parentName.trim() === '' ||
      !parentPhone ||
      !studentAge
    ) {
      res.status(422).json({ message: 'Invalid input.' });

      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      courseId,
      parentName,
      parentPhone,
      studentAge,
    };

    // console.log(newComment);

    // const db = client.db();
    // const result = await db.collection('comments').insertOne(newComment);

    // console.log(result);
    let result;
    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;

      res
        .status(201)
        .json({ message: 'Added form successfully!', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Submitting the form failed!' });
    }
  }
  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(
        client,
        'comments',
        { _id: -1 },
        { courseId: courseId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting form submission failed!' });
    }
  }

  client.close();
}

export default handler;
