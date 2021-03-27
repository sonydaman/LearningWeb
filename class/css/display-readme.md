display
----block default width 100%
----inherit if any of the parent value is exist that value will inherit
----initial unset if allready any value exist that value will not remain
----none if any conent we want to hide
----flex --done
----inline-block  
----inline-flex --done
-------flex-direction --done
----------row
----------column
----------row-reverse
----------column-reverse
-------justify-content --done x axis
------------flex-start
------------flex-end
------------center
------------space-around
------------space-evenly
------------space-between
-------align-items --done y axis
------------flex-start
------------flex-end
------------center
-------flex-basis : 1

<header style="display:flex">
    <div style="display:inherit">
    <div class="class-1 class-2 class-3 class-4">
    <div style="display:unset">
<div style="display:flex;justify-content:flex-end">
    <div>block a</div>
    <div style="flex-basis:1">block b</div>
    <div>block c</div>
    <div>block d</div>
</div>
