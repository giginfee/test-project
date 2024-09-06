export default `
                <span class="ql-formats" v-bind="ptm('formats')">
                    <select class="ql-header" defaultValue="0" v-bind="ptm('header')">
                        <option value="1" v-bind="ptm('option')">Heading</option>
                        <option value="2" v-bind="ptm('option')">Subheading</option>
                        <option value="0" v-bind="ptm('option')">Normal</option>
                    </select>
                    <select class="ql-font" v-bind="ptm('font')">
                        <option v-bind="ptm('option')"></option>
                        <option value="serif" v-bind="ptm('option')"></option>
                        <option value="monospace" v-bind="ptm('option')"></option>
                    </select>
                </span>
                <span class="ql-formats" v-bind="ptm('formats')">
                <select class="ql-size">
                    <option value="small"></option>
                    <option selected></option>
                    <option value="large"></option>
                    <option value="huge"></option>
                </select>
                </span>
                <span class="ql-formats" v-bind="ptm('formats')">
                    <button class="ql-bold" type="button" v-bind="ptm('bold')"></button>
                    <button class="ql-italic" type="button" v-bind="ptm('italic')"></button>
                    <button class="ql-underline" type="button" v-bind="ptm('underline')"></button>
                </span>
                <span :key="reRenderColorKey" class="ql-formats" v-bind="ptm('formats')">
                    <select class="ql-color" v-bind="ptm('color')"></select>
                    <select class="ql-background" v-bind="ptm('background')"></select>
                </span>
                <span class="ql-formats" v-bind="ptm('formats')">
                    <button class="ql-list" value="ordered" type="button" v-bind="ptm('list')"></button>
                    <button class="ql-list" value="bullet" type="button" v-bind="ptm('list')"></button>
                    <select class="ql-align" v-bind="ptm('select')">
                        <option defaultValue v-bind="ptm('option')"></option>
                        <option value="center" v-bind="ptm('option')"></option>
                        <option value="right" v-bind="ptm('option')"></option>
                        <option value="justify" v-bind="ptm('option')"></option>
                    </select>
                </span>
                <span class="ql-formats" v-bind="ptm('formats')">
                    <button class="ql-code-block" type="button" v-bind="ptm('codeBlock')"></button>
                </span>
                <span class="ql-formats" v-bind="ptm('formats')">
                    <button class="ql-clean" type="button" v-bind="ptm('clean')"></button>
                </span>

`;
