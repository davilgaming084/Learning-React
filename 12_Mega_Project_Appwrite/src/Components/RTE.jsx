import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from 'react-hook-form'
const RTE = ({ name, control, lable, defaulvalue = "" }) => {
  return (
    <div>
      {lable && <label>{lable}</label>}

      <Controller
        name={name || "container"}
        control={control}
        render={({ field: { onChange } }) => {
          <Editor
            initialValue={defaulvalue}
            init={{
              initialValue: defaulvalue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",

              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
          />
        }}
      />
    </div>
  )
}

export default RTE