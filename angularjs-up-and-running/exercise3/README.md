## Summary

This lesson was created through **3's chapter of Angular Up and Running** book.

Setup test suite with [Karma][1] as test runner tool and [Jasmine][2] test framework pretty simple.

Fist of all install Karma globally and plugins as Jasmine and browser launcher via NPM:

    npm install karma -g
    npm install karma-jasmine karma-chrome-launcher

Create `karma.conf.js` file by executing following command:

    karma init

In config file you have to provide path to Angular and source source of main codebase.

To run tests you need setup Karma server `karma start` that by default will accessible through [localhost:8080](localhost:8080).
And then run it any time executing `karma run` command.

    [2016-05-14 21:49:06.132] [DEBUG] config - Loading config /Users/Anton/Documents/Java_Projects/PlayNode/angularjs-up-and-running/exercise3/karma.conf.js
    Chrome 50.0.2661 (Mac OS X 10.11.4): Executed 0 of 2 SUCCESS (0 secs / 0 secs)
    Chrome 50.0.2661 (Mac OS X 10.11.4): Executed 2 of 2 SUCCESS (0.033 secs / 0.027 secs)
    
    
[1]: https://karma-runner.github.io/0.13/index.html
[2]: http://jasmine.github.io/2.4/introduction.html