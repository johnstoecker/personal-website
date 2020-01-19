<?php

        // Set the content-type
         header('Content-Type: image/png');
        // Create the image
        if ($_GET['size'])
		$font_size = $_GET['size'];
	else
		$font_size = 80;
        if ($_GET['8bit'])
		$font = './PxPlus_IBM_VGA9.ttf';
	else
		$font = './Raleway-Medium.ttf';
        $text = $_GET['text'];
        if (strlen($text)>500) {
          $text="it's too long my friend";
        }
        $bbox = imagettfbbox($font_size, 0, $font, $text);
        $width = abs($bbox[4] - $bbox[0]);
        $height = abs($bbox[5] - $bbox[1]);

        // Add the text
        if($_GET['8bit']){
                $resized_width = 2;
		while($resized_width < $width + 29){
			$resized_width = $resized_width * 2;
		}
		//TODO: abstract this out into a fn
		$resized_height = 2;
		while ($resized_height < $height + $font_size - 1) {
			$resized_height = $resized_height *2;
		}
		$im = imagecreatetruecolor($resized_width, $resized_height);
        	$white = imagecolorallocate($im, 255, 255, 255);
        	$black = imagecolorallocate($im, 0, 0, 0);
		imagefilledrectangle($im, 0, 0, $resized_width, $resized_height, $white);
		//turn off aliasing for 8bit text
		imagettftext($im, $font_size, 0, 15, $resized_height-32, -$black, $font, $text);

	} else {
		$im = imagecreatetruecolor($width + 30, $height+$font_size);
        	$white = imagecolorallocate($im, 255, 255, 255);
        	$black = imagecolorallocate($im, 0, 0, 0);
		imagefilledrectangle($im, 0, 0, $width + 29, $height + $font_size - 1, $white);
        	imagettftext($im, $font_size, 0, 15, $height + $font_size/2, $black, $font, $text);
        }
	// Using imagepng() results in clearer text compared with imagejpeg()
        imagepng($im);
        imagedestroy($im);
        imagecolordeallocate($white);
        imagecolordeallocate($black);
        // Get Image content a variable
        // Clean the output buffer

        //Base64 Encode
?>
