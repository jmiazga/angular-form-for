angular.module("formFor.defaultTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("form-for/templates/checkbox-field.html","<div  class=\"field checkbox-field\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-error  error=\"model.error\"\n                left-aligned=\"true\"\n                uid=\"{{model.uid}}-error\">\n  </field-error>\n\n  <input  aria-manager\n          id=\"{{model.uid}}\"\n          type=\"checkbox\"\n          class=\"field-input\"\n          tabindex=\"{{tabIndex}}\"\n          ng-model=\"model.bindable\"\n          ng-disabled=\"disable || model.disabled\">\n\n  <span class=\"checkbox-field-input\" ng-class=\"{\'is-checked\': model.bindable}\"></span>\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{model.uid}}\"\n                uid=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\">\n  </field-label>\n</div>\n");
$templateCache.put("form-for/templates/collection-label.html","<div class=\"collection-label\">\n  <field-label  ng-if=\"label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <small field-error error=\"model.error\" left-aligned=\"true\"></small>\n</div>\n");
$templateCache.put("form-for/templates/field-error.html","<p  ng-if=\"error\"\n    id=\"{{uid}}\"\n    class=\"field-error\" ng-class=\"{\'left-aligned\': leftAligned}\"\n    ng-bind=\"error\">\n</p>\n");
$templateCache.put("form-for/templates/field-label.html","<label  id=\"{{uid}}\"\n        for=\"{{inputUid}}\"\n        class=\"field-label\"\n        popover=\"{{help}}\"\n        popover-trigger=\"mouseenter\"\n        popover-placement=\"right\">\n\n  <span ng-bind-html=\"bindableLabel\"></span>\n\n  <span ng-if=\"help\" class=\"fa-stack help-icon-stack\">\n    <i class=\"fa fa-stack-2x fa-circle help-background-icon\"></i>\n    <i class=\"fa fa-stack-1x fa-inverse fa-question help-foreground-icon\"></i>\n  </span>\n\n  <span class=\"field-label-required-label\" ng-if=\"requiredLabel\" ng-bind=\"requiredLabel\"></span>\n</label>\n");
$templateCache.put("form-for/templates/radio-field.html","<span class=\"field radio-field\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-error  ng-if=\"!hideErrorMessage\"\n                error=\"model.error\"\n                left-aligned=\"true\"\n                uid=\"{{uid}}-error\">\n  </field-error>\n\n  <input  aria-manager\n          type=\"radio\" class=\"field-input\"\n          id=\"{{uid}}\"\n          tabindex=\"{{tabIndex}}\"\n          ng-model=\"model.bindable\"\n          ng-value=\"value\"\n          ng-checked=\"checked\"\n          ng-disabled=\"disable || model.disabled\">\n\n  <span class=\"radio-field-input\" ng-class=\"{\'is-selected\': checked}\"\n        ng-click=\"click()\"></span>\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{uid}}\"\n                uid=\"{{uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\">\n  </field-label>\n</span>\n");
$templateCache.put("form-for/templates/select-field-loading-indicator.html","<i class=\"fa fa-circle-o-notch fa-spin\"></i>\nLoading...\n");
$templateCache.put("form-for/templates/select-field.html","<div  class=\"field select-field\"\n      ng-class=\"{ \'disabled\': disable || model.disabled,\n                  \'has-error\': model.error,\n                  \'open\': isOpen }\">\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{model.uid}}\"\n                iud=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error  error=\"model.error\"\n                uid=\"{{model.uid}}-error\">\n  </field-error>\n\n  <!-- Filtered dropdowns use a type-ahead style component -->\n  <div ng-show=\"enableFiltering\" class=\"text-field-input-wrapper\">\n    <input  aria-manager\n            id=\"{{model.uid}}\"\n            type=\"text\" class=\"select-field-filter-text-input\"\n            tabindex=\"{{tabIndex}}\"\n            placeholder=\"{{placeholder}}\"\n            ng-disabled=\"disable || model.disabled\"\n            ng-model=\"filter\"\n            ng-click=\"filterTextClick($event)\"\n            ng-focus=\"open()\"\n            ng-keydown=\"keyDown($event)\">\n\n    <span class=\"text-field-input-icon text-field-input-icon-after\" ng-click=\"setFilterFocus()\">\n      <i class=\"text-field-icon fa fa-caret-down\"></i>\n    </span>\n\n    <div  ng-show=\"isOpen\"\n          class=\"select-field-list-container\">\n      <ul class=\"select-field-list\" ng-class=\"{show: isOpen}\">\n        <li ng-repeat=\"option in filteredOptions\"\n            class=\"select-field-list-item\"\n            ng-class=\"{ active: option === selectedOption,\n                        hover: $index === mouseOverIndex}\"\n            ng-bind=\"option[labelAttribute]\"\n            ng-click=\"selectOption(option)\"\n            ng-mouseenter=\"mouseOver($index)\">\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Unfiltered dropdowns use a regular [Bootstrap] select -->\n  <div ng-if=\"!enableFiltering\" class=\"select-field-wrapper\">\n    <select aria-manager\n            id=\"{{model.uid}}\"\n            class=\"select-field-select\"\n            tabindex=\"{{tabIndex}}\"\n            placeholder=\"{{placeholder}}\"\n            ng-disabled=\"disable || model.disabled\"\n            ng-model=\"model.bindable\"\n            ng-options=\"option[valueAttribute] as option[labelAttribute] for option in filteredOptions\">\n    </select>\n  </div>\n</div>\n");
$templateCache.put("form-for/templates/submit-button.html","<button class=\"submit-button\" ng-class=\"buttonClass\"\n        ng-disabled=\"disable || model.disabled\"\n        role=\"button\"\n        tabindex=\"{{tabIndex}}\">\n\n  <i ng-if=\"icon\" class=\"submit-button-icon\" ng-class=\"icon\"></i>\n\n  <span ng-bind-html=\"bindableLabel\"></span>\n</button>\n");
$templateCache.put("form-for/templates/text-field.html","<div  class=\"field text-field\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{model.uid}}\"\n                iud=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error  error=\"model.error\"\n                uid=\"{{model.uid}}-error\">\n  </field-error>\n\n  <div ng-class=\"{\'text-field-input-wrapper\': iconBefore || iconAfter}\">\n    <span ng-if=\"iconBefore\" class=\"text-field-input-icon text-field-input-icon-before\"\n          ng-click=\"onIconBeforeClick()\">\n      <i class=\"text-field-icon\" ng-class=\"iconBefore\"></i>\n    </span>\n\n    <input  aria-manager\n\n            ng-if=\"!multiline\"\n            id=\"{{model.uid}}\"\n            class=\"text-field-input\"\n            ng-class=\"{\'has-icon-before\': iconBefore, \'has-icon-after\': iconAfter}\"\n            ng-disabled=\"disable || model.disabled\"\n\n            type=\"{{type}}\"\n            tabindex=\"{{tabIndex}}\"\n            placeholder=\"{{placeholder}}\"\n            ng-model=\"model.bindable\"\n            form-for-debounce=\"{{debounce}}\"\n            ng-click=\"onFocus()\" />\n\n    <textarea aria-manager\n\n              ng-if=\"multiline\"\n              id=\"{{model.uid}}\"\n              class=\"text-field-input\"\n              ng-class=\"{\'has-icon-before\': iconBefore, \'has-icon-after\': iconAfter}\"\n              ng-disabled=\"disable || model.disabled\"\n\n              tabindex=\"{{tabIndex}}\"\n              placeholder=\"{{placeholder}}\"\n              ng-model=\"model.bindable\"\n              form-for-debounce=\"{{debounce}}\"\n              ng-click=\"onFocus()\">\n    </textarea>\n\n    <span ng-if=\"iconAfter\" class=\"text-field-input-icon text-field-input-icon-after\"\n          ng-click=\"onIconAfterClick()\">\n      <i class=\"text-field-icon\" ng-class=\"iconAfter\"></i>\n    </span>\n  </div>\n</div>\n");}]);