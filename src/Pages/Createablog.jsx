import React, { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { FaBold, FaItalic } from "react-icons/fa";
import {http} from "../config/Axios";
import { TfiAlignLeft, TfiAlignCenter, TfiAlignRight } from "react-icons/tfi";

const Createablog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const contentRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [cancelledImages, setCancelledImages] = useState(new Set());
  const [showTagModal, setShowTagModal] = useState(false);

  const allTags = [
    "Anxiety",
    "Depression",
    "Loneliness",
    "Grief",
    "PTSD",
    "BPD",
    "Substance Abuse",
    "Eating Disorder",
  ];
  const visibleTags = allTags.slice(0, 3);

  const handleTagClick = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prev) => [...prev, tag]);
    }

    const contentEl = contentRef.current;
    contentEl.focus();

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.textContent = `#${tag} `;
    span.style.color = "blue";
    range.insertNode(span);

    range.setStartAfter(span);
    range.setEndAfter(span);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const formatText = (command) => {
    contentRef.current?.focus();
    document.execCommand(command, false, null);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setSelectedImages((prev) => [...prev, ...filesWithPreview]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  const onCancelImage = (file) => {
    URL.revokeObjectURL(file.preview);
    setCancelledImages((prev) => new Set([...prev, file]));
    setSelectedImages((prev) => prev.filter((img) => img !== file));
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", contentRef.current.innerHTML);
    selectedImages
      .filter((file) => !cancelledImages.has(file))
      .forEach((file) => {
        formData.append("images", file);
      });
    senddataToApi(formData);
  };

  const senddataToApi = async (formData) => {
    try {
      const response = await http.post("/post", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#bcccdc] min-h-screen p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-4 lg:bg-white shadow-md rounded-lg"
      >
        {/* TITLE */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-400">{errors.title.message}</p>
          )}
        </div>

        {/* DROPZONE */}
        <div className="mb-4">
          <label className="block  text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <div
            {...getRootProps()}
            className={`mt-1 p-4 bg-white border-2 border-dashed rounded-md cursor-pointer ${
              isDragActive
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            <p className="text-sm text-gray-500">
              {isDragActive
                ? "Drop the images here..."
                : "Drag & drop images here, or click to select files"}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mb-4 relative">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <div
            id="content"
            ref={contentRef}
            contentEditable
            className="mt-1 block w-full h-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white overflow-auto"
            placeholder="Enter post content"
            spellCheck="false"
          ></div>
          <div className="absolute top-[160px] right-[10px] flex gap-3">
            <button type="button" onClick={() => formatText("bold")}>
              <FaBold />
            </button>
            <button type="button" onClick={() => formatText("italic")}>
              <FaItalic />
            </button>
            <button type="button" onClick={() => formatText("justifyLeft")}>
              <TfiAlignLeft />
            </button>
            <button type="button" onClick={() => formatText("justifyCenter")}>
              <TfiAlignCenter />
            </button>
            <button type="button" onClick={() => formatText("justifyRight")}>
              <TfiAlignRight />
            </button>
          </div>
        </div>

        {/* IMAGES PREVIEW */}
        {selectedImages.length > 0 && (
          <div className="grid grid-cols-5 gap-3 mt-3">
            {selectedImages.map((file, index) => (
              <div key={index} className="relative">
                <img
                  className="h-24 w-full object-cover"
                  src={file.preview}
                  alt={`preview-${index}`}
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-700"
                  onClick={() => onCancelImage(file)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAGS */}
        <div className="mb-4 mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {visibleTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`rounded-[10px] text-black px-4 py-2 transition duration-300 ${
                  selectedTags.includes(tag)
                    ? "bg-amber-300 shadow-lg"
                    : "bg-[#f6ca56] hover:bg-amber-300 hover:shadow-lg"
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
            <button
              type="button"
              className="bg-[#f6ca56] rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
              onClick={() => setShowTagModal(true)}
            >
              +Tags
            </button>
          </div>
        </div>

        {/* TAG MODAL */}
        {showTagModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h2 className="text-lg font-semibold mb-4">Select Tags</h2>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`rounded-[10px] text-black px-4 py-2 transition duration-300 ${
                      selectedTags.includes(tag)
                        ? "bg-amber-300 shadow-lg"
                        : "bg-[#f6ca56] hover:bg-amber-300 hover:shadow-lg"
                    }`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setShowTagModal(false)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Createablog;
