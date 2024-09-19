import { UploadButton, UploadDropzone } from "~/utils/uploadthing";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadDropzone
        endpoint="imagesUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
