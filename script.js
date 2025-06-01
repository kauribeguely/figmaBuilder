let figmaData;
fetch('figma-proxy.php')
  .then(response => {
    // if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    // document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    console.log(data.document.children[0].children[0]);
    figmaData = data;
    renderResponse();
  })
  .catch(error => {
    document.getElementById('output').textContent = 'Error: ' + error.message;
  });


// Utility to convert Figma's style object to CSS
function applyStyle(el, style) {
if (!style) return;
  el.style.fontFamily = style.fontFamily || "";
  el.style.fontSize = style.fontSize + "px" || "";
  el.style.fontWeight = style.fontWeight || "";
  el.style.letterSpacing = style.letterSpacing + "px" || "";
  el.style.lineHeight = style.lineHeightPx + "px" || "";
  el.style.textAlign = (style.textAlignHorizontal || "").toLowerCase();
  el.style.display = "block";
  el.style.margin = "1rem 0";
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
  if (child.type === "TEXT") {
    el = document.createElement("H1");
    el.textContent = child.characters;
  }
  else if (child.type === "FRAME")
  {
    el = document.createElement("div");

    if(child.children.length > 0)
    {
      renderResponseOnAllChildren(child, el);
    }
  }
  else if (child.type === "RECTANGLE")
  {
    el = document.createElement("div");
    if(child.fills.length > 0)
    {

      if(child.fills[0].type == 'IMAGE')
      {
        el = document.createElement("img");
        el.src = 'https://placehold.co/600x600';
        // TODO get images from file too, match with child.fills[0].imageRef
      }

    }
    // renderResponseOnAllChildren(child, el);
  }
  else
  {
    el = document.createElement("p");
    el.textContent = `[Unsupported type: ${child.type}]`;
  }
  el.id = child.name;
  applyStyle(el, child.style);
  section.appendChild(el);
}
