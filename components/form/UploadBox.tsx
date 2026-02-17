"use client";

type Props = {
  onUpload: (url: string) => void;
};

export default function UploadBox({ onUpload }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    onUpload(url);
  }

  return (
    <div className="border-dashed border-2 p-4 text-center">
      <input type="file" onChange={handleChange} />
      <p className="text-sm text-gray-500 mt-2">
        Image preview only (local)
      </p>
    </div>
  );
}
