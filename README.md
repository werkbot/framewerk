# Framewerk 0.5.0
Our CSS framework we use internally here at Werkbot.

## Requirements
- Requires SASS

## Installation
Include the partials in your main sass file in the following order:

- _reset.scss (You can exclude if you have your own reset)
- _framewerk.scss
- _framewerk-responsive.scss

Create the following variables in your variables partial (or where ever you create your sass variables):

    /* LAYOUT */
    $spacing: 20px;
    $container-size: 1140px;

    /* BREAK POINTS */
    $responsive-phone-breakpoint: 600px;
    $responsive-tablet-breakpoint: 900px;

There is a file included in this repository "_framewerk_variables.scss" which can be used as an example (do not include this file in your main sass file, it could be updated in the future and any changes you make would be overwritten.)

## Documentation
This framework is built on the idea of laying content out in columns in a horizontal "section". When you define a section, the columns across must work out to 100% across, no more, no less.

### Example Section

    <div class="section">
      <div class="container">

        <!-- PERCENTAGE CLASS - THIRTY -->
        <div class="thirty">
          <div class="space halfright">
            Content 1
          </div>
        </div>

        <!-- PERCENTAGE CLASS - THIRTY -->
        <div class="thirty">
          <div class="space halfleft halfright">
            Content 2
          </div>
        </div>

        <!-- PERCENTAGE CLASS - FORTY -->
        <div class="forty">
          <div class="space halfleft">
            Content 3
          </div>
        </div>

        <!-- CLEAR PERCENTAGE CLASS -->
        <div class="clear"></div>

      </div>
    </div>

### Percentage Classes
The percentage classes start at five and continue in multiple's of five until one hundred.
The following are the special percentage classes:

- .half - 0.5%
- .full - 100%
- .thirty-three - 33%
- .thirty-four - 34%
- .sixty-six - 66%
- .sixty-seven - 67%

### Uniform Spacing Classes
Entering a "space" class around content in a percentage class will provide uniform spacing throughout the project. The variable is defined in the _framewerk_variables.scss. The following classes can help adjust the spacing.

- .noleft - padding is removed from the left
- .noright - padding is removed from the right
- .halfleft - padding on the left is cut in half
- .halfright - padding on the right is cut in half
- .notop - padding is removed from the top
- .nobottom - padding is removed from the bottom
- .halftop - padding on the top is cut in half
- .halfbottom - padding on the bottom is cut in half

These are added as extra classes to the space class.

### Responsive
The responsive sass file is separate so it can be included in a separate sass file. At Werkbot we produce two main css files, one with responsive css and the other without, so we can turn responsive css on and off for a site.

Two breakpoints are defined in _framewerk-responsive.scss, one for table and the other for phone. The actual variable for the breakpoints are defined in the _framewerk_variables.scss.

A class can cancel the responsiveness, by adding the .noresponsive class to the percentage class. This will ensure the column width never changes on any screen.

### Rules to live by
1. Sum of all percentage classes across a section must equal 100%.
2. Do not add css to any of the percentage, space classes or any classes in this framework. If you need to add css to them, do so by adding a new class or ID that is outside of this framework (unique to your project).
3. Make sure to clear a section's percentages.

## Issues
Report all issues in the "Framewerk" jira project: http://jira.werkbot.com/projects/FR

## Maintainers
 * Jay Richardson <jay@werkbot.com>
 * Werkbot <info@werkbot.com>

## License
Copyright (c) 2015, Werkbot Studios
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.
* Neither the name of SilverStripe nor the names of its contributors may be used to endorse or promote products derived from this software
  without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
OF SUCH DAMAGE.
