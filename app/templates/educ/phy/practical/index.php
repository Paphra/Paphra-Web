<heaad>
    <title>Practical Physics - Paphra Physics</title>
    <?php
    if (isset($_GET["sbtp"])) {
	$subtopic = $_GET["sbtp"];
    } else {
	$subtopic = "";
    }
    ?>
</heaad>
<?php require '../hf/header.php'; ?>

<body>
    <div class="">
	<!-- One -->
	<section id="" class="">
	    <div class="row">
		<div class="w3-right-align">
		    <br/>
		    <h1 class="">Practical Physics</h1>
		    <br/>
		    <hr/>
		</div>
	    </div>
	</section>


	<div id="prac">
	    <div class="row">
		<div class="bgrid-thirds">
		    <div class="columns"></div>
		    <div class="columns">
			<h3 class="align-center" >Practical Physics Topics</h3>
			<?php require 'topics/subtopslist.php'; ?>
		    </div>
		    <div class="columns"></div>
		</div>
	    </div>
	    <div class="w3-white">
		<?php
		require 'topics/subtops.php';
		?>
	    </div>
	</div>

    </div>
    <?php require '../hf/footer.php'; ?>
</body>