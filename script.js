let figmaData, imageData;
let allFetched = false;
let fetchSuccess = 0;

function fetchData()
{
  fetch('figma-proxy.php')
    .then(response => {
      // if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      // document.getElementById('output').textContent = JSON.stringify(data, null, 2);
      console.log(data.document.children[0].children[0]);
      console.log(data);
      figmaData = data;
      fetchSuccess++;
      if(fetchSuccess == 2)
      {
        renderResponse();
      }
    })
    .catch(error => {
      document.getElementById('output').textContent += 'Error: ' + error.message;
    });

    fetch('figma-images.php')
      .then(response => {
        // if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        console.log('Images: ');
        console.log(data);
        imageData = data;
        fetchSuccess++;
        if(fetchSuccess == 2)
        {
          renderResponse();
        }
      })
      .catch(error => {
        document.getElementById('output').textContent += 'ImgError: ' + error.message;
      });
}



function dummyData()
{
  figmaData = {
      "document": {
          "id": "0:0",
          "name": "Document",
          "type": "DOCUMENT",
          "scrollBehavior": "SCROLLS",
          "children": [
              {
                  "id": "0:1",
                  "name": "Page 1",
                  "type": "CANVAS",
                  "scrollBehavior": "SCROLLS",
                  "children": [
                      {
                          "id": "16:3",
                          "name": "FullOne",
                          "type": "FRAME",
                          "scrollBehavior": "SCROLLS",
                          "children": [
                              {
                                  "id": "17:12",
                                  "name": "Frame 1",
                                  "type": "FRAME",
                                  "scrollBehavior": "SCROLLS",
                                  "children": [
                                      {
                                          "id": "16:4",
                                          "name": "Main Heading",
                                          "type": "TEXT",
                                          "scrollBehavior": "SCROLLS",
                                          "blendMode": "PASS_THROUGH",
                                          "fills": [
                                              {
                                                  "blendMode": "NORMAL",
                                                  "type": "SOLID",
                                                  "color": {
                                                      "r": 0,
                                                      "g": 0,
                                                      "b": 0,
                                                      "a": 1
                                                  }
                                              }
                                          ],
                                          "strokes": [],
                                          "strokeWeight": 1,
                                          "strokeAlign": "OUTSIDE",
                                          "absoluteBoundingBox": {
                                              "x": -1040.1097412109375,
                                              "y": -591,
                                              "width": 667,
                                              "height": 238
                                          },
                                          "absoluteRenderBounds": {
                                              "x": -1036.9097900390625,
                                              "y": -560.5999755859375,
                                              "width": 655.5050659179688,
                                              "height": 211.58663940429688
                                          },
                                          "constraints": {
                                              "vertical": "TOP",
                                              "horizontal": "LEFT"
                                          },
                                          "layoutAlign": "STRETCH",
                                          "layoutGrow": 0,
                                          "layoutSizingHorizontal": "FILL",
                                          "layoutSizingVertical": "HUG",
                                          "characters": "Main Heading",
                                          "characterStyleOverrides": [],
                                          "styleOverrideTable": {},
                                          "lineTypes": [
                                              "NONE"
                                          ],
                                          "lineIndentations": [
                                              0
                                          ],
                                          "style": {
                                              "fontFamily": "Integral CF",
                                              "fontPostScriptName": "IntegralCF-Heavy",
                                              "fontStyle": "Heavy",
                                              "fontWeight": 900,
                                              "textAutoResize": "HEIGHT",
                                              "fontSize": 128,
                                              "textAlignHorizontal": "LEFT",
                                              "textAlignVertical": "TOP",
                                              "letterSpacing": 0,
                                              "lineHeightPx": 119,
                                              "lineHeightPercent": 77.47395324707031,
                                              "lineHeightPercentFontSize": 92.96875,
                                              "lineHeightUnit": "PIXELS"
                                          },
                                          "layoutVersion": 4,
                                          "effects": [],
                                          "interactions": []
                                      },
                                      {
                                          "id": "16:5",
                                          "name": "You can create a .gitignore file in your repository's root directory to tell Git which files and directories to ignore when you make a commit. To share the ignore rules with other users who clone the repository, commit the .gitignore file in to your repository.",
                                          "type": "TEXT",
                                          "scrollBehavior": "SCROLLS",
                                          "blendMode": "PASS_THROUGH",
                                          "fills": [
                                              {
                                                  "blendMode": "NORMAL",
                                                  "type": "SOLID",
                                                  "color": {
                                                      "r": 0,
                                                      "g": 0,
                                                      "b": 0,
                                                      "a": 1
                                                  }
                                              }
                                          ],
                                          "strokes": [],
                                          "strokeWeight": 1,
                                          "strokeAlign": "OUTSIDE",
                                          "absoluteBoundingBox": {
                                              "x": -1040.1097412109375,
                                              "y": -276,
                                              "width": 397.3560791015625,
                                              "height": 135
                                          },
                                          "absoluteRenderBounds": {
                                              "x": -1039.7518310546875,
                                              "y": -267.6590881347656,
                                              "width": 370.4718017578125,
                                              "height": 121.68180847167969
                                          },
                                          "constraints": {
                                              "vertical": "TOP",
                                              "horizontal": "LEFT"
                                          },
                                          "layoutAlign": "INHERIT",
                                          "layoutGrow": 0,
                                          "layoutSizingHorizontal": "FIXED",
                                          "layoutSizingVertical": "HUG",
                                          "characters": "You can create a .gitignore file in your repository's root directory to tell Git which files and directories to ignore when you make a commit. To share the ignore rules with other users who clone the repository, commit the .gitignore file in to your repository.",
                                          "characterStyleOverrides": [],
                                          "styleOverrideTable": {},
                                          "lineTypes": [
                                              "NONE"
                                          ],
                                          "lineIndentations": [
                                              0
                                          ],
                                          "style": {
                                              "fontFamily": "Inter",
                                              "fontPostScriptName": null,
                                              "fontStyle": "Regular",
                                              "fontWeight": 400,
                                              "textAutoResize": "HEIGHT",
                                              "fontSize": 14,
                                              "textAlignHorizontal": "LEFT",
                                              "textAlignVertical": "TOP",
                                              "letterSpacing": 0,
                                              "lineHeightPx": 27,
                                              "lineHeightPercent": 159.35614013671875,
                                              "lineHeightPercentFontSize": 192.85714721679688,
                                              "lineHeightUnit": "PIXELS"
                                          },
                                          "layoutVersion": 4,
                                          "effects": [],
                                          "interactions": []
                                      },
                                      {
                                          "id": "16:10",
                                          "name": "button",
                                          "type": "FRAME",
                                          "scrollBehavior": "SCROLLS",
                                          "children": [
                                              {
                                                  "id": "16:11",
                                                  "name": "Sign Up",
                                                  "type": "TEXT",
                                                  "scrollBehavior": "SCROLLS",
                                                  "blendMode": "PASS_THROUGH",
                                                  "fills": [
                                                      {
                                                          "blendMode": "NORMAL",
                                                          "type": "SOLID",
                                                          "color": {
                                                              "r": 1,
                                                              "g": 1,
                                                              "b": 1,
                                                              "a": 1
                                                          }
                                                      }
                                                  ],
                                                  "strokes": [],
                                                  "strokeWeight": 1,
                                                  "strokeAlign": "OUTSIDE",
                                                  "absoluteBoundingBox": {
                                                      "x": -929.1097412109375,
                                                      "y": -52,
                                                      "width": 89,
                                                      "height": 27
                                                  },
                                                  "absoluteRenderBounds": {
                                                      "x": -928.3142700195312,
                                                      "y": -43.5,
                                                      "width": 87.2650146484375,
                                                      "height": 13.522727966308594
                                                  },
                                                  "constraints": {
                                                      "vertical": "TOP",
                                                      "horizontal": "LEFT"
                                                  },
                                                  "layoutAlign": "INHERIT",
                                                  "layoutGrow": 0,
                                                  "layoutSizingHorizontal": "HUG",
                                                  "layoutSizingVertical": "HUG",
                                                  "characters": "Sign Up",
                                                  "characterStyleOverrides": [],
                                                  "styleOverrideTable": {},
                                                  "lineTypes": [
                                                      "NONE"
                                                  ],
                                                  "lineIndentations": [
                                                      0
                                                  ],
                                                  "style": {
                                                      "fontFamily": "Inter",
                                                      "fontPostScriptName": null,
                                                      "fontStyle": "Regular",
                                                      "fontWeight": 400,
                                                      "textAutoResize": "WIDTH_AND_HEIGHT",
                                                      "fontSize": 14,
                                                      "textAlignHorizontal": "LEFT",
                                                      "textAlignVertical": "TOP",
                                                      "letterSpacing": 6.16,
                                                      "lineHeightPx": 27,
                                                      "lineHeightPercent": 159.35614013671875,
                                                      "lineHeightPercentFontSize": 192.85714721679688,
                                                      "lineHeightUnit": "PIXELS"
                                                  },
                                                  "layoutVersion": 4,
                                                  "effects": [],
                                                  "interactions": []
                                              }
                                          ],
                                          "blendMode": "PASS_THROUGH",
                                          "clipsContent": true,
                                          "background": [
                                              {
                                                  "blendMode": "NORMAL",
                                                  "type": "SOLID",
                                                  "color": {
                                                      "r": 0,
                                                      "g": 0,
                                                      "b": 0,
                                                      "a": 1
                                                  }
                                              }
                                          ],
                                          "fills": [
                                              {
                                                  "blendMode": "NORMAL",
                                                  "type": "SOLID",
                                                  "color": {
                                                      "r": 0,
                                                      "g": 0,
                                                      "b": 0,
                                                      "a": 1
                                                  }
                                              }
                                          ],
                                          "strokes": [],
                                          "strokeWeight": 1,
                                          "strokeAlign": "INSIDE",
                                          "backgroundColor": {
                                              "r": 0,
                                              "g": 0,
                                              "b": 0,
                                              "a": 1
                                          },
                                          "layoutMode": "HORIZONTAL",
                                          "itemSpacing": 10,
                                          "counterAxisAlignItems": "CENTER",
                                          "primaryAxisAlignItems": "CENTER",
                                          "paddingLeft": 111,
                                          "paddingRight": 111,
                                          "paddingTop": 12,
                                          "paddingBottom": 12,
                                          "layoutWrap": "NO_WRAP",
                                          "absoluteBoundingBox": {
                                              "x": -1040.1097412109375,
                                              "y": -64,
                                              "width": 311,
                                              "height": 51
                                          },
                                          "absoluteRenderBounds": {
                                              "x": -1040.1097412109375,
                                              "y": -64,
                                              "width": 311,
                                              "height": 51
                                          },
                                          "constraints": {
                                              "vertical": "TOP",
                                              "horizontal": "LEFT"
                                          },
                                          "layoutAlign": "INHERIT",
                                          "layoutGrow": 0,
                                          "layoutSizingHorizontal": "HUG",
                                          "layoutSizingVertical": "HUG",
                                          "effects": [],
                                          "interactions": []
                                      }
                                  ],
                                  "blendMode": "PASS_THROUGH",
                                  "clipsContent": false,
                                  "background": [],
                                  "fills": [],
                                  "strokes": [],
                                  "strokeWeight": 1,
                                  "strokeAlign": "INSIDE",
                                  "backgroundColor": {
                                      "r": 0,
                                      "g": 0,
                                      "b": 0,
                                      "a": 0
                                  },
                                  "layoutMode": "VERTICAL",
                                  "counterAxisSizingMode": "FIXED",
                                  "itemSpacing": 77,
                                  "layoutWrap": "NO_WRAP",
                                  "absoluteBoundingBox": {
                                      "x": -1040.1097412109375,
                                      "y": -591,
                                      "width": 667,
                                      "height": 578
                                  },
                                  "absoluteRenderBounds": {
                                      "x": -1040.1097412109375,
                                      "y": -591,
                                      "width": 667,
                                      "height": 578
                                  },
                                  "constraints": {
                                      "vertical": "TOP",
                                      "horizontal": "LEFT"
                                  },
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "layoutSizingHorizontal": "FIXED",
                                  "layoutSizingVertical": "HUG",
                                  "effects": [],
                                  "interactions": []
                              },
                              {
                                  "id": "16:8",
                                  "name": "image 1",
                                  "type": "RECTANGLE",
                                  "scrollBehavior": "SCROLLS",
                                  "blendMode": "PASS_THROUGH",
                                  "fills": [
                                      {
                                          "blendMode": "NORMAL",
                                          "type": "IMAGE",
                                          "scaleMode": "FILL",
                                          "imageRef": "55260c7754bb92a566f5096ef213b0c0ac58e2b7"
                                      }
                                  ],
                                  "strokes": [],
                                  "strokeWeight": 1,
                                  "strokeAlign": "INSIDE",
                                  "absoluteBoundingBox": {
                                      "x": -247.1097412109375,
                                      "y": -606.6097412109375,
                                      "width": 609.2194213867188,
                                      "height": 609.2194213867188
                                  },
                                  "absoluteRenderBounds": {
                                      "x": -247.1097412109375,
                                      "y": -606.6097412109375,
                                      "width": 609.2194213867188,
                                      "height": 609.2194213867188
                                  },
                                  "targetAspectRatio": {
                                      "x": 768,
                                      "y": 768
                                  },
                                  "constraints": {
                                      "vertical": "TOP",
                                      "horizontal": "LEFT"
                                  },
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "layoutSizingHorizontal": "FIXED",
                                  "layoutSizingVertical": "FIXED",
                                  "effects": [],
                                  "interactions": []
                              }
                          ],
                          "blendMode": "PASS_THROUGH",
                          "clipsContent": true,
                          "background": [
                              {
                                  "blendMode": "NORMAL",
                                  "type": "SOLID",
                                  "color": {
                                      "r": 1,
                                      "g": 1,
                                      "b": 1,
                                      "a": 1
                                  }
                              }
                          ],
                          "fills": [
                              {
                                  "blendMode": "NORMAL",
                                  "type": "SOLID",
                                  "color": {
                                      "r": 1,
                                      "g": 1,
                                      "b": 1,
                                      "a": 1
                                  }
                              }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "strokeAlign": "INSIDE",
                          "backgroundColor": {
                              "r": 1,
                              "g": 1,
                              "b": 1,
                              "a": 1
                          },
                          "layoutMode": "HORIZONTAL",
                          "counterAxisSizingMode": "FIXED",
                          "itemSpacing": 126,
                          "primaryAxisSizingMode": "FIXED",
                          "counterAxisAlignItems": "CENTER",
                          "primaryAxisAlignItems": "CENTER",
                          "paddingLeft": 258,
                          "paddingRight": 258,
                          "paddingTop": 235,
                          "paddingBottom": 235,
                          "layoutWrap": "NO_WRAP",
                          "absoluteBoundingBox": {
                              "x": -1299,
                              "y": -842,
                              "width": 1920,
                              "height": 1080
                          },
                          "absoluteRenderBounds": {
                              "x": -1299,
                              "y": -842,
                              "width": 1920,
                              "height": 1080
                          },
                          "constraints": {
                              "vertical": "TOP",
                              "horizontal": "LEFT"
                          },
                          "layoutSizingHorizontal": "FIXED",
                          "layoutSizingVertical": "FIXED",
                          "effects": [],
                          "interactions": []
                      }
                  ],
                  "backgroundColor": {
                      "r": 0.11764705926179886,
                      "g": 0.11764705926179886,
                      "b": 0.11764705926179886,
                      "a": 1
                  },
                  "prototypeStartNodeID": null,
                  "flowStartingPoints": [],
                  "prototypeDevice": {
                      "type": "NONE",
                      "rotation": "NONE"
                  }
              }
          ]
      },
      "components": {},
      "componentSets": {},
      "schemaVersion": 0,
      "styles": {},
      "name": "JSON Test",
      "lastModified": "2025-06-01T10:28:13Z",
      "thumbnailUrl": "https://s3-alpha.figma.com/thumbnails/49e24767-ef16-47a2-bc4f-a5b50583873c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWCULRAZSF5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4a22a20e9c49edafc63bda054592973b157a2162856e0c9e3d9c98b2c3162e66",
      "version": "2224622086363750122",
      "role": "owner",
      "editorType": "figma",
      "linkAccess": "view"
  }
  renderResponse();

  console.log(figmaData.document.children[0].children[0]);
}

// dummyData();
// dummyData2();
fetchData();



// Utility to convert Figma's style object to CSS
function applyStyle(el, obj) {

    if(obj.absoluteBoundingBox){
  el.style.width = obj.absoluteBoundingBox.width + "px";
  el.style.height = obj.absoluteBoundingBox.height + "px";
    }
    if (!obj.style) return;
 const style = obj.style;
  el.style.fontFamily = style.fontFamily || "";
  el.style.fontSize = style.fontSize + "px" || "";
  el.style.fontWeight = style.fontWeight || "";
  el.style.letterSpacing = style.letterSpacing + "px" || "";
  el.style.lineHeight = style.lineHeightPx + "px" || "";
  el.style.textAlign = (style.textAlignHorizontal || "").toLowerCase();
  if(obj.fills.length > 0)
  {
    el.style.color = convertColorObjectToCssRgba(obj.fills[0].color);
  }
  // el.style.display = "block";
  // el.style.margin = "1rem 0";

}

function renderResponse()
{
    // Render logic
    const app = document.getElementById("app");


    // figmaData.document.children.forEach(canvas =>
    // {
    //   const section = document.createElement("section");
    //   section.style.padding = "2rem";
    //   section.style.border = "1px solid #ccc";
    //
    //   canvas.children.forEach(frame => {
    //       if (frame.children) {
    //         frame.children.forEach(child => {
    //             renderSingleChild(child, section);
    //         });
    //       }
    //   });
    const canvas = figmaData.document.children[0];

    console.log('start');
    //every frame in the page?
    //TODO: the frame needs its own element, i created section based on the page
    canvas.children.forEach(frame => {
          const section = document.createElement("section");
          section.id = frame.name;
          section.classList.add('frame');
          applyFrameStyles(section, frame);
          // applyStyle(section, frame.style);
          if (frame.children)
          {
            renderResponseOnAllChildren(frame, section);
          }
          app.appendChild(section);

      });

    // });
}

function applyFrameStyles(element, object)
{
  let elS = element.style;
  elS.paddingLeft = object.paddingLeft + 'px';
  elS.paddingRight = object.paddingRight + 'px';
  elS.paddingTop = object.paddingTop + 'px';
  elS.paddingBottom = object.paddingBottom + 'px';
  elS.gap = object.itemSpacing + 'px';

  if(object.layoutMode == 'VERTICAL')  elS.flexDirection = 'column';

  if(object.layoutWrap == "WRAP") elS.flexWrap = 'wrap';
  
  //TODO does this primary base on if layoutMode horizontal or vertical? will need to change alignItems or justifyContent
  if(object.primaryAxisAlignItems == "SPACE_BETWEEN")
  {
    elS.justifyContent = "space-between";
  }
  else if(object.primaryAxisAlignItems == "CENTER")
  {
    elS.justifyContent = "center";
  }


  elS.backgroundColor = convertColorObjectToCssRgba(object.backgroundColor);
}


function convertColorObjectToCssRgba(colorObj) {
  const r255 = Math.round(colorObj.r * 255);
  const g255 = Math.round(colorObj.g * 255);
  const b255 = Math.round(colorObj.b * 255);
  const a = colorObj.a; // Alpha is already in 0-1 range

  return `rgba(${r255}, ${g255}, ${b255}, ${a})`;
}

function renderResponseOnAllChildren(parent, parentDiv)
{
  parent.children.forEach(child => {
      renderSingleChild(child, parentDiv);
  });
}

function renderSingleChild(child, section)
{
  let el;
  if(!child.visible === false) return;
  if (child.type === "TEXT") {
    el = document.createElement("H1");
    el.textContent = child.characters;
  }
  else if (child.type === "FRAME" || child.type === "GROUP")
  {
    el = document.createElement("div");
    el.classList.add('frame');
    applyFrameStyles(el, child);
    renderFills(el, child);
    if(child.children.length > 0)
    {
      renderResponseOnAllChildren(child, el);
    }
  }
  else if (child.type === "RECTANGLE")
  {
    el = document.createElement("div");
    renderFills(el, child);
    // renderResponseOnAllChildren(child, el);
  }
  else if (child.type === "VECTOR")
  {
    el = document.createElement("div");
    el.textContent = 'X';
    renderFills(el, child);
    // renderResponseOnAllChildren(child, el);
  }
  else
  {
    console.log(`[Unsupported type: ${child.type}]`);
  }
  if(el) 
    {
            el.id = child.name;
            applyStyle(el, child);
            section.appendChild(el);
    }
}

function renderFills(el, obj)
{
    if(obj.fills.length > 0)
    {

      if(obj.fills[0].type == 'IMAGE')
      {
        // el = document.createElement("img");
        const src = imageData.meta.images[obj.fills[0].imageRef];
        // el.src = src;
        el.style.backgroundImage = "url("+src+")";
        // el.src = 'https://placehold.co/600x600';
        // TODO get images from file too, match with child.fills[0].imageRef
      }
      else if(obj.fills[0].type == 'SOLID')
      {
        el.style.backgroundColor = convertColorObjectToCssRgba(obj.fills[0].color);
      }

    }
}
