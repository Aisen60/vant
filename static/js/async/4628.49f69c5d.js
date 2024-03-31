/*! For license information please see 4628.49f69c5d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4628"],{31793:function(t,s,n){"use strict";n.r(s);var a=n("69298");let l=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Cell</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>The cell is a single display item in the list.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cell</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cell</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="inset-grouped" tabindex="-1">Inset Grouped</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="size" tabindex="-1">Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>\n    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span>\n    <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="left-icon" tabindex="-1">Left Icon</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;location-o&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="link" tabindex="-1">Link</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">is-link</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="router" tabindex="-1">Router</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;URL&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Vue Router&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="group-title" tabindex="-1">Group Title</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Group 1&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Group 2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="use-slots" tabindex="-1">Use Slots</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">is-link</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Use the title slot to customize the title --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-title&quot;</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Use the right-icon slot to customize the right icon --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;search-icon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.custom-title</span> {\n    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">4px</span>;\n    <span class="hljs-attribute">vertical-align</span>: middle;\n  }\n\n  <span class="hljs-selector-class">.search-icon</span> {\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;\n    <span class="hljs-attribute">line-height</span>: inherit;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="vertical-center" tabindex="-1">Vertical Center</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="cellgroup-props" tabindex="-1">CellGroup Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>Group title</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>inset</td>\n<td>Whether to be inset grouped</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>Whether to show outer border</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cell-props" tabindex="-1">Cell Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>Title</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>Right text</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>Description below the title</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>Size, can be set to <code>large</code> <code>normal</code></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Left Icon</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>tag</td>\n<td>Custom element tag</td>\n<td><em>string</em></td>\n<td><code>div</code></td>\n</tr>\n<tr>\n<td>url</td>\n<td>Link URL</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>replace</td>\n<td>If true, the navigation will not leave a history record</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>Whether to show inner border</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>center</td>\n<td>Whether to center content vertically</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>Whether to show click feedback when clicked</td>\n<td><em>boolean</em></td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>Whether to show link icon</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>required</td>\n<td>Whether to show required mark</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>arrow-direction</td>\n<td>Can be set to <code>left</code> <code>up</code> <code>down</code></td>\n<td><em>string</em></td>\n<td><code>right</code></td>\n</tr>\n<tr>\n<td>title-style</td>\n<td>Title style</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>Title className</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value-class</td>\n<td>Value className</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label-class</td>\n<td>Label className</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cell-events" tabindex="-1">Cell Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when cell is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cellgroup-slots" tabindex="-1">CellGroup Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Default slot</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Custom title</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cell-slots" tabindex="-1">Cell Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>Custom title</td>\n</tr>\n<tr>\n<td>value</td>\n<td>Custom value</td>\n</tr>\n<tr>\n<td>label</td>\n<td>Custom label</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Custom left icon</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>Custom right icon</td>\n</tr>\n<tr>\n<td>extra</td>\n<td>Custom extra content on the right</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">CellSize</span>,\n  <span class="hljs-title class_">CellProps</span>,\n  <span class="hljs-title class_">CellGroupProps</span>,\n  <span class="hljs-title class_">CellArrowDirection</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-cell-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-line-height</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-vertical-padding</td>\n<td><em>10px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-horizontal-padding</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-border-color</td>\n<td><em>var(--van-border-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-active-color</td>\n<td><em>var(--van-active-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-required-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-line-height</td>\n<td><em>var(--van-line-height-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-margin-top</td>\n<td><em>var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-value-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-value-font-size</td>\n<td><em>inherit</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-icon-size</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-right-icon-color</td>\n<td><em>var(--van-gray-6)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-vertical-padding</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-title-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-label-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-value-font-size</td>\n<td><em>inherit</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-padding</td>\n<td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-line-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-inset-padding</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-inset-radius</td>\n<td><em>var(--van-radius-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-inset-title-padding</td>\n<td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);