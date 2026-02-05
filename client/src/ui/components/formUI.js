
/**
 * 
 * @param {Array<Object>} fields 
 */
export function buildFormComponent (fields, btnAttrs)
{
    const form = document.createElement("form");
    form.classList.add("flex", "flex-col");
    form.setAttribute("id", "form");
    form.setAttribute("method", "POST");
    fields.forEach
    (
        (field) => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("flex", "flex-col");

            const label = document.createElement("label");
            label.innerHTML = field.label;
            label.classList.add(`label-${field.label}`, "flex", "flex-col");

            const input = document.createElement("input");
            input.classList.add(`input-${field.input.name}`, "border-black", "border", "rounded-sm");
            for (const [key, value] of Object.entries(field.input))
                input.setAttribute(key, value);
            label.appendChild(input);
            wrapper.appendChild(label);
            form.appendChild(wrapper);
        }
    )
    const button = document.createElement("button");
    button.innerHTML = btnAttrs.text;
    button.setAttribute("type", "submit");
    button.classList.add("submit-btn");
    form.appendChild(button);
    return form;
}

// input = type class name