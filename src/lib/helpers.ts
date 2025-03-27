import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

const { CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export async function uploadImageToCloudinary(
  image: File,
  slug: string
): Promise<string> {
  const buffer = Buffer.from(await image.arrayBuffer());
  const readableStream = Readable.from(buffer);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        public_id: slug,
        folder: "foodies",
        transformation: [
          {
            width: 300,
            height: 300,
            crop: "limit",
          },
        ],
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result?.secure_url || "");
        }
      }
    );

    readableStream.pipe(stream);
  });
}
