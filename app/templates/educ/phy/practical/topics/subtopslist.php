
<script type="text/javascript">
    function subRedir() {
	var value = document.getElementById("subListPrac").value;
	window.location = "?t=prac&sbtp=" + value + "#" + value;
    }

</script>
<nav id="" class="w3-card-24">
    <select onchange="subRedir()" id="subListPrac"
	    class="align-center w3-input w3-animate-input">
	<option <?php if ($subtopic == 'int' || $subtopic == '') { ?>
	    selected="true"
	    <?php } ?> title="Click To View" value="int">Introduction</option>
	<option <?php if ($subtopic == 'usq') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="usq">Units And Symbols</option>
	<option <?php if ($subtopic == 'mei') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="mei">Measuring Instruments</option>
	<option <?php if ($subtopic == 'sif') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="sif">Significant Figures</option>
	<option <?php if ($subtopic == 'ovm') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="ovm">Other Values Manipulation</option>
	<option <?php if ($subtopic == 'pwp') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="pwp">Practical Work Presentation</option>
	<option <?php if ($subtopic == 'ufa') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="ufa">Units of Final Answer</option>
	<option <?php if ($subtopic == 'erp') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="erp">Error Propagation</option>
	<option <?php if ($subtopic == 'qns') { ?>
    	    selected="true"
	    <?php } ?> title="Click To View" value="qns">Questions</option>
    </select>
</nav>
