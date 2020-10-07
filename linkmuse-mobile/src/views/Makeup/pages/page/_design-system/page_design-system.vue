<template lang="html">
<div class="page page_design-system">
		<div class="sidebar sidebar_design-system">
			<nav class="nav">
				<div class="heading heading_h3">Elements</div>
				<ul class="nav__list">
					<li class="nav__item"><a href="#headings" class="link nav__link">Heading</a></li>
					<li class="nav__item"><a href="#buttons" class="link nav__link">Button</a></li>
					<li class="nav__item"><a href="#inputs" class="link nav__link">Input</a></li>
					<li class="nav__item"><a href="#textareas" class="link nav__link">Textarea</a></li>
					<li class="nav__item"><a href="#checkboxes" class="link nav__link">Checkbox</a></li>
					<li class="nav__item"><a href="#radio-buttons" class="link nav__link">Radio-button</a></li>
					<li class="nav__item"><a href="#switches" class="link nav__link">Switch</a></li>
					<li class="nav__item"><a href="#tags" class="link nav__link">Tag</a></li>
					<li class="nav__item"><a href="#tooltips" class="link nav__link">Tooltip</a></li>
					<li class="nav__item"><a href="#links" class="link nav__link">Link</a></li>
					<li class="nav__item"><a href="#icons" class="link nav__link">Icon</a></li>
					<li class="nav__item"><a href="#widgets" class="link nav__link">Widget</a></li>
					<li class="nav__item"><a href="#status" class="link nav__link">Status</a></li>
				</ul>
			</nav>
		</div>
		<div class="container page__container page__container_design-system">
			<h1 class="heading heading_h1">Mobile version</h1>
			<h1 class="heading heading_h1">Elements</h1>
			<h2 id="headings" class="heading heading_h2">Headings</h2>
			
			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<h1 class="heading heading_h1">Heading 1</h1>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="heading_h1">&lt;h1 class="heading heading_h1"&gt;Heading 1&lt;/h1&gt;</code></pre>
						<button @click="getSelectedText('heading_h1')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>
			
			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<h2 class="heading heading_h2">Heading 2</h2>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="heading_h2">&lt;h1 class="heading heading_h2"&gt;Heading 2&lt;/h1&gt;</code></pre>
						<button @click="getSelectedText('heading_h2')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>
			
			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<h3 class="heading heading_h3">Heading 3</h3>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="heading_h3">&lt;h1 class="heading heading_h3"&gt;Heading 3&lt;/h1&gt;</code></pre>
						<button @click="getSelectedText('heading_h3')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<h4 class="heading heading_h4">Heading 4</h4>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="heading_h4">&lt;h1 class="heading heading_h4"&gt;Heading 4&lt;/h1&gt;</code></pre>
						<button @click="getSelectedText('heading_h4')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>


			<h2 id="buttons" class="heading heading_h2">Buttons</h2>
			<h3 class="heading heading_h3">Types of buttons</h3>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_primary">button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_primary">&lt;button class="btn btn_primary"&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_primary')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_outline">button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_outline">&lt;button class="btn btn_outline"&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_outline')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_secondary">button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_secondary">&lt;button class="btn btn_secondary"&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_secondary')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_transparency_32">button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_transparency_32">&lt;button class="btn btn_transparency_32"&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_transparency_32')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_icon btn_primary">button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_primary_icon">&lt;button class="btn btn_icon btn_primary"&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_primary_icon')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_icon btn_secondary">button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_secondary_icon">&lt;button class="btn btn_icon btn_secondary"&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_secondary_icon')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_icon btn_outline">button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_outline_icon">&lt;button class="btn btn_icon btn_outline"&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_outline_icon')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_round btn_primary">
						<svg class="btn__icon">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_primary_round">&lt;button class="btn btn_round btn_primary"&gt;
  &lt;svg class="btn__icon"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_primary_round')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_round btn_secondary">
						<svg class="btn__icon">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</button>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_secondary_round">&lt;button class="btn btn_round btn_secondary"&gt;
  &lt;svg class="btn__icon"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_secondary_round')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_round btn_outline">
						<svg class="btn__icon">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</button>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_outline_round">&lt;button class="btn btn_round btn_outline"&gt;
  &lt;svg class="btn__icon"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_outline_round')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_round btn_transparency_32">
						<svg class="btn__icon">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</button>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_transparency_32_round">&lt;button class="btn btn_round btn_transparency_32"&gt;
  &lt;svg class="btn__icon"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_transparency_32_round')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h3 class="heading heading_h3">States of the buttons</h3>
			<h4 class="heading heading_h4">Disable-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_primary" disabled>button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_primary_disabled">&lt;button class="btn btn_primary" disabled&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_primary_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_secondary" disabled>button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_secondary_disabled">&lt;button class="btn btn_secondary" disabled&gt;button&lt;/button></code></pre>
						<button @click="getSelectedText('btn_secondary_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<button class="btn btn_outline" disabled>button</button>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="btn_outline_disabled">&lt;button class="btn btn_outline" disabled&gt;button&lt;/button&gt;</code></pre>
						<button @click="getSelectedText('btn_outline_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="inputs" class="heading heading_h2">Inputs</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="input">
						<input id="" type="text" placeholder="Text" class="input__field">
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="input">&lt;div class="input"&gt;
  &lt;input id="" type="text" placeholder="Text" class="input__field"&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('input')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="input">
						<label for="" class="input__label">Label</label>
						<input id="" type="text" placeholder="Text" class="input__field">
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="input_label">&lt;div class="input"&gt;
  &lt;label for="" class="input__label"&gt;Label&lt;/label&gt;
  &lt;input id="" type="text" placeholder="Text" class="input__field"&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('input_label')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h3 class="heading heading_h3">States of the inputs</h3>
			<h4 class="heading heading_h4">Disable-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="input input_disable">
						<input id="" type="text" placeholder="Text" class="input__field" disabled>
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="input_disabled">&lt;div class="input input_disable"&gt;
  &lt;input id="" type="text" placeholder="Text" class="input__field" disabled&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('input_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h4 class="heading heading_h4">Success-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="input input_success">
						<input id="" type="text" placeholder="Text" class="input__field">
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="input_success">&lt;div class="input input_success"&gt;
  &lt;input id="" type="text" placeholder="Text" class="input__field"&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('input_success')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h4 class="heading heading_h4">Error-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="input input_error">
						<input id="" type="text" placeholder="Text" class="input__field">
						<div class="input__notification input__notification_error">Error</div>
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="input_error">&lt;div class="input input_error"&gt;
  &lt;input id="" type="text" placeholder="Text" class="input__field"&gt;
  &lt;div class="input__notification input__notification_error"&gt;Error&lt;/div&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('input_error')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h4 class="heading heading_h4">Info-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="input input_info">
						<input id="" type="text" placeholder="Text" class="input__field">
						<div class="input__notification input__notification_info">
							<svg class="input__icon input__icon_info">
								<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
							</svg>
							info
						</div>
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="input_info">&lt;div class="input input_info"&gt;
  &lt;input id="" type="text" placeholder="Text" class="input__field"&gt;
  &lt;div class="input__notification input__notification_info"&gt;
    &lt;svg class="input__icon input__icon_info"&gt;
      &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
    &lt;/svg&gt;
    info
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('input_info')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="textareas" class="heading heading_h2">Textarea</h2>
			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="textarea">
						<textarea name="" id="" placeholder="Text" class="textarea__field"></textarea>
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="textarea">&lt;div class="textarea"&gt;
  &lt;textarea name="" id="" placeholder="Text" class="textarea__field"&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('textarea')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="textarea">
						<label for="" class="textarea__label">Label</label>
						<textarea name="" id="" placeholder="Text" class="textarea__field"></textarea>
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="textarea_labeled">&lt;div class="textarea"&gt;
  &lt;label for="" class="textarea__label"&gt;Label&lt;/label&gt;
  &lt;textarea name="" id="" placeholder="Text" class="textarea__field"&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('textarea_labeled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h3 class="heading heading_h3">States of the textarea</h3>
			<h4 class="heading heading_h4">Disable-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="textarea">
						<textarea name="" id="" placeholder="Text" class="textarea__field" disabled></textarea>
					</div>		
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="textarea_disabled">&lt;div class="textarea"&gt;
  &lt;textarea name="" id="" placeholder="Text" class="textarea__field" disabled&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('textarea_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h4 class="heading heading_h4">Error-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="textarea textarea_error">
						<textarea name="" id="" placeholder="Text" class="textarea__field"></textarea>
						<div class="textarea__notification textarea__notification_error">Error</div>
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="textarea_error">&lt;div class="textarea textarea_error"&gt;
  &lt;textarea name="" id="" placeholder="Text" class="textarea__field"&gt;&lt;/textarea&gt;
  &lt;div class="textarea__notification textarea__notification_error"&gt;Error&lt;/div&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('textarea_error')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h4 class="heading heading_h4">Info-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="textarea textarea_info">
						<textarea name="" id="" placeholder="Text" class="textarea__field"></textarea>
						<div class="textarea__notification textarea__notification_info">
							<svg class="textarea__icon textarea__icon_info">
								<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
							</svg>
							info
						</div>
					</div>
				</div>

				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="textarea_info">&lt;div class="textarea textarea_info"&gt;
  &lt;textarea name="" id="" placeholder="Text" class="textarea__field"&gt;&lt;/textarea&gt;
  &lt;div class="textarea__notification textarea__notification_info"&gt;
    &lt;svg class="textarea__icon textarea__icon_info"&gt;
      &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
    &lt;/svg&gt;
    info
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('textarea_info')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="checkboxes" class="heading heading_h2">Checkboxes</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="checkbox">
						<input id="1" type="checkbox" class="checkbox__mark">
						<label for="1" class="checkbox__label">Checkbox</label>	
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="checkbox">&lt;div class="checkbox"&gt;
  &lt;input id="1" type="checkbox" class="checkbox__mark"&gt;
  &lt;label for="1" class="checkbox__label"&gt;Checkbox&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('checkbox')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div>Don't forget to set the id="" and for="" attributes</div>
			<div>set the bg-image in .checkbox__mark</div>

			<h3 class="heading heading_h3">States of the сheckboxe</h3>
			<h4 class="heading heading_h4">Disable-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="checkbox">
						<input id="" type="checkbox" class="checkbox__mark" disabled>
						<label for="" class="checkbox__label">Checkbox</label>
					</div>	
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="checkbox_disabled">&lt;div class="checkbox"&gt;
  &lt;input id="" type="checkbox" class="checkbox__mark" disabled&gt;
  &lt;label for="" class="checkbox__label"&gt;Checkbox&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('checkbox_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="radio-buttons" class="heading heading_h2">Radio buttons</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="radio">
						<input id="2" type="radio" class="radio__mark" name="test">
						<label for="2" class="radio__label">Radio</label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="radio">&lt;div class="radio"&gt;
  &lt;input id="2" type="radio" class="radio__mark" name="test"&gt;
  &lt;label for="2" class="radio__label"&gt;Radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('radio')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="radio">
						<input id="3" type="radio" class="radio__mark" name="test">
						<label for="3" class="radio__label">Radio</label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="radio2">&lt;div class="radio"&gt;
  &lt;input id="3" type="radio" class="radio__mark" name="test"&gt;
  &lt;label for="3" class="radio__label"&gt;Radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('radio2')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div>Don't forget to set the id="", for="" and name="" attributes</div>

			<h3 class="heading heading_h3">States of the radio-button</h3>
			<h4 class="heading heading_h4">Disable-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="radio radio_disable">
						<input id="4" type="radio" class="radio__mark" disabled>
						<label for="4" class="radio__label">Radio</label>
					</div>	
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="radio_disabled">&lt;div class="radio radio_disable"&gt;
  &lt;input id="4" type="radio" class="radio__mark" disabled&gt;
  &lt;label for="4" class="radio__label"&gt;Radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('radio_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>


			<h2 id="switches" class="heading heading_h2">Switches</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="switch">
						<input id="5" type="checkbox" class="switch__mark">
						<label for="5" class="switch__btn"></label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="switch">&lt;div class="switch"&gt;
  &lt;input id="5" type="checkbox" class="switch__mark"&gt;
  &lt;label for="5" class="switch__btn"&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('switch')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="switch">
						<label for="6" class="switch__label">Label 1</label>
						<input id="6" type="checkbox" class="switch__mark">
						<label for="6" class="switch__btn"></label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="switch_label_left">&lt;div class="switch"&gt;
  &lt;label for="6" class="switch__label"&gt;Label 1&lt;/label&gt;
  &lt;input id="6" type="checkbox" class="switch__mark"&gt;
  &lt;label for="6" class="switch__btn"&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('switch_label_left')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="switch">
						<input id="7" type="checkbox" class="switch__mark">
						<label for="7" class="switch__btn"></label>
						<label for="7" class="switch__label">Label 1</label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="switch_label_right">&lt;div class="switch"&gt;
  &lt;input id="7" type="checkbox" class="switch__mark"&gt;
  &lt;label for="7" class="switch__btn"&gt;&lt;/label&gt;
  &lt;label for="7" class="switch__label"&gt;Label 1&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('switch_label_right')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="switch">
						<label for="8" class="switch__label">Label 1</label>
						<input id="8" type="checkbox" class="switch__mark">
						<label for="8" class="switch__btn"></label>
						<label for="8" class="switch__label">Label 2</label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="switch_label_both">&lt;div class="switch"&gt;
  &lt;label for="8" class="switch__label"&gt;Label 1&lt;/label&gt;
  &lt;input id="8" type="checkbox" class="switch__mark"&gt;
  &lt;label for="8" class="switch__btn"&gt;&lt;/label&gt;
  &lt;label for="8" class="switch__label"&gt;Label 2&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('switch_label_both')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h3 class="heading heading_h3">States of the switch</h3>
			<h4 class="heading heading_h4">Disable-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="switch">
						<input id="9" type="checkbox" class="switch__mark" disabled>
						<label for="9" class="switch__btn"></label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="switch_disable">&lt;div class="switch"&gt;
  &lt;input id="9" type="checkbox" class="switch__mark" disabled&gt;
  &lt;label for="9" class="switch__btn"&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('switch_disable')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h4 class="heading heading_h4">Disable-active-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="switch">
						<input id="10" type="checkbox" class="switch__mark" checked disabled>
						<label for="10" class="switch__btn"></label>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="switch_disable_active">&lt;div class="switch"&gt;
  &lt;input id="10" type="checkbox" class="switch__mark" checked disabled&gt;
  &lt;label for="10" class="switch__btn"&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('switch_disable_active')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="tags" class="heading heading_h2">Tags</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_size_lg">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_size_lg">&lt;div class="tag tag_size_lg"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_size_lg')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_size_md">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_size_md">&lt;div class="tag tag_size_md"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_size_md')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_size_sm">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_size_sm">&lt;div class="tag tag_size_sm"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_size_sm')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_transparency_32 tag_size_lg">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_transparency_32_lg">&lt;div class="tag tag_transparency_32 tag_size_lg"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_transparency_32_lg')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_transparency_32 tag_size_md">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_transparency_32_md">&lt;div class="tag tag_transparency_32 tag_size_md"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_transparency_32_md')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_transparency_32 tag_size_sm">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_transparency_32_sm">&lt;div class="tag tag_transparency_32 tag_size_sm"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_transparency_32_sm')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_primary tag_size_lg">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_primary_lg">&lt;div class="tag tag_primary tag_size_lg"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_primary_lg')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_primary tag_size_md">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_primary_md">&lt;div class="tag tag_primary tag_size_md"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_primary_md')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_primary tag_size_sm">tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_primary_sm">&lt;div class="tag tag_primary tag_size_sm"&gt;tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_primary_sm')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_round tag_round_size_lg">
						<svg class="tag__icon tag__icon_size_lg">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_round_lg">&lt;div class="tag tag_round tag_round_size_lg"&gt;
  &lt;svg class="tag__icon tag__icon_size_lg"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_round_lg')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_round tag_round_size_md">
						<svg class="tag__icon tag__icon_size_md">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_round_md">&lt;div class="tag tag_round tag_round_size_md"&gt;
  &lt;svg class="tag__icon tag__icon_size_md"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_round_md')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_round tag_round_size_sm">
						<svg class="tag__icon tag__icon_size_sm">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_round_sm">&lt;div class="tag tag_round tag_round_size_sm"&gt;
  &lt;svg class="tag__icon tag__icon_size_sm"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_round_sm')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h3 class="heading heading_h3">States of the tags</h3>
			<h4 class="heading heading_h4">Active-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_size_lg tag_active">
						Tag
						<svg class="tag__icon tag__icon_close">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_size_lg_active">&lt;div class="tag tag_size_lg tag_active"&gt;
  Tag
  &lt;svg class="tag__icon tag__icon_close"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_size_lg_active')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h4 class="heading heading_h4">Disabled-state</h4>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tag tag_size_lg tag_disabled">Tag</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tag_size_lg_disabled">&lt;div class="tag tag_size_lg tag_disabled"&gt;Tag&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tag_size_lg_disabled')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="tooltips" class="heading heading_h2">Tooltips</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="tooltip">Короткий текст,<br />максимум в 3 строки</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="tooltip">&lt;div class="tooltip"&gt;Короткий текст,<br />максимум в 3 строки&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('tooltip')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="links" class="heading heading_h2">Links</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<a href="#" class="link">Link</a>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="link">&lt;a href="#" class="link"&gt;Link&lt;/a&gt;</code></pre>
						<button @click="getSelectedText('link')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="icons" class="heading heading_h2">Icons</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<svg class="icon icon_size_sm">
						<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
					</svg>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="icon_sm">&lt;svg class="icon icon_size_sm"&gt;
  &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
&lt;/svg&gt;</code></pre>
						<button @click="getSelectedText('icon_sm')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<svg class="icon icon_size_lg">
						<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
					</svg>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="icon_lg">&lt;svg class="icon icon_size_lg"&gt;
  &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
&lt;/svg&gt;</code></pre>
						<button @click="getSelectedText('icon_lg')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>


			<h2 id="widgets" class="heading heading_h2">Widgets</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="widget">
						<svg class="icon icon_size_sm">
							<use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
						</svg>
						<span class="widget__label">label</span>
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="widget">&lt;div class="widget"&gt;
  &lt;svg class="icon icon_size_sm"&gt;
    &lt;use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" /&gt;
  &lt;/svg&gt;
  &lt;span class="widget__label"&gt;label&lt;/span&gt;
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('widget')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 id="status" class="heading heading_h2">Status</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="status status_online"></div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="status_online">&lt;div class="status status_online"&gt;&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('status_online')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="status status_offline"></div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="status_offline">&lt;div class="status status_offline"&gt;&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('status_offline')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="status status_notification"></div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="status_notification">&lt;div class="status status_notification"&gt;&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('status_notification')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<!-- ask Denis about layout -->
			<h2 class="heading heading_h2">Lables</h2>

			<div class="card card_design-system">
				<div class="card__header card__header_design-system">
					<div class="label label_category">
						<div class="status status_notification status_notification_category"></div>
						label category
					</div>
				</div>
				<div class="card__body card__body_design-system">
					<div class="row row_justify_between row_align_center">
						<pre><code id="label_category">&lt;div class="label label_category"&gt;
  &lt;div class="status status_notification status_notification_category"&gt;&lt;/div&gt;
  label category
&lt;/div&gt;</code></pre>
						<button @click="getSelectedText('label_category')" class="btn btn_outline">copy</button>
					</div>
				</div>
			</div>

			<h2 class="heading heading_h2">Selects</h2>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    getSelectedText (idValue) {
      var ta = document.getElementById(idValue);
      console.log(ta);
      var range = document.createRange();
      range.selectNode(ta);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch (err) {
        console.log('Error, cant copy');
      }

      window.getSelection().removeAllRanges();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
