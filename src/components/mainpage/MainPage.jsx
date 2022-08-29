import React, { useState } from "react";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from "slate";
// import css
import "./mainpage.css";
//import font icons from material ui
import EdiText from "react-editext";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ImageIcon from "@mui/icons-material/Image";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import HighlightIcon from "@mui/icons-material/Highlight";
import Highlighter from "react-highlight-words";
import { SlateEditor, SlateToolbar, SlateContent } from "slate-editor";
import {
  ColorPlugin,
  ColorButton,
  ColorStateModel,
} from "@slate-editor/color-plugin";

const MainPage = () => {
  // const [value, setValue] = useState();
  // const [editor] = useState(() => withReact())
  //   const editor = useSlate();
  // set main paragraph
  const [value, setValue] = useState(
    "Lorem Ipsum but the majority have suffered alteration There are many Lorem Ipsum but the majority have suffered alteration There are many"
  );
    // set first paragraph
  const [value1, setValue1] = useState(
    "Lorem Ipsum but the majority have suffered alteration There are many Lorem Ipsum but the majority have suffered alteration There are many"
  );
    // set second paragraph
  const [value2, setValue2] = useState(
    "Lorem Ipsum but the majority have suffered alteration There are many Lorem Ipsum but the majority have suffered alteration There are many"
  );
    // set third paragraph
  const [value3, setValue3] = useState(
    "There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich dont look even slightly believable. If you are going to use a passage. There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randowowhich don't look even slightly believable. If you are going to use a passage."
  );
  // function to edit and save main paragraph
  const handleSave = (val) => {
    console.log("Edited Value -> ", val);
    setValue(val);
  };
  // function to edit and save first paragraph
  const handleSave1 = (val) => {
    console.log("Edited Value -> ", val);
    setValue1(val);
  };
  // function to edit and save second paragraph
  const handleSave2 = (val) => {
    console.log("Edited Value -> ", val);
    setValue2(val);
  };
  // function to edit and save third paragraph
  const handleSave3 = (val) => {
    console.log("Edited Value -> ", val);
    setValue3(val);
  };
  // function to set colour 
  const colorPluginOptions = new ColorStateModel()
    .rgba({ r: 100, g: 100, b: 100, a: 1 })
    .gen();

  const plugins = [ColorPlugin()];

  return (
    <div className="mainpage">
      <div className="feature1">
        <div className="intro">John Doe Interview</div>
      </div>

      <div className="feature2">
        <FormatBoldIcon className="icons" />
        <FormatItalicIcon className="icons" />
        <FormatUnderlinedIcon className="icons" />
        <AlignHorizontalLeftIcon className="icons" />
        <AlignHorizontalCenterIcon className="icons" />
        <FormatListNumberedIcon className="icons" />
        <AttachmentIcon className="icons" />
        <ImageIcon className="icons" />
        <SentimentSatisfiedAltIcon className="icons" />
        <HighlightIcon
          className="icons"
          // function to highlight the text
          onClick={() => {
            document.onmouseup = () => {
              // console.log(window.getSelection().toString());
              var ss = window.getSelection().toString();
              // console.log(window.getSelection().toString());
              // <Highlighter
              //   highlightClassName="mainpage"
              //   searchWords={ss}
              //   autoEscape={false}
              //   textToHighlight={value3}
              // />;
              console.log(ss);
            };
          }}
        />
      </div>

      <div className="feature3">
        <p>
          <EdiText type="text" value={value3} onSave={handleSave3} />
        </p>

        {/* <SlateEditor value={value} onChange={setValue} /> */}
        {/* <ReactEditor/> */}
        {/* <Slate editor={editor}>
          <Editable />
        </Slate> */}
      </div>

      <div className="feature4">
        <div>
          <div className="boxes">Box1</div>
          <div className="newchanges">
            <div className="changes">
              <div className="makechange">
                <img
                  src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="images"
                />
              </div>
              <div>
                <div className="bodyWrapper">
                  <div className="details">Speaker 1</div>
                  <div className="wrappertime">09:45</div>
                </div>
                <div className="paras">
                  <EdiText type="text" value={value} onSave={handleSave} />
                </div>
              </div>
            </div>

            <div className="changes">
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="images"
              />
              <div>
                <div className="bodyWrapper">
                  <div className="details">Speaker 2</div>
                  <div className="wrappertime">06:35</div>
                </div>
                <div className="paras">
                  <EdiText type="text" value={value1} onSave={handleSave1} />
                </div>
              </div>
            </div>

            <div className="changes">
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="images"
              />
              <div>
                <div className="bodyWrapper">
                  <div className="details">Speaker 3</div>
                  <div className="wrappertime">04:30</div>
                </div>
                <div className="paras">
                  <EdiText type="text" value={value2} onSave={handleSave2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature5">Lot of Calls in the beg...</div>

      <div className="feature6">Frequency of use ins...</div>

      <div className="feature7">Lot of Calls in the beg...</div>
    </div>
  );
};

export default MainPage;
