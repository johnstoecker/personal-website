<?php

        // Set the content-type
         header('Content-Type: image/png');
        // Create the image
        $font_size = 80;
        $font = './Raleway-Medium.ttf';
        $text = $_GET['text'];
        if (strlen($text)>500) {
          $text="it's too long my friend";
        }
        $bbox = imagettfbbox($font_size, 0, $font, $text);
        $width = abs($bbox[4] - $bbox[0]);
        $height = abs($bbox[5] - $bbox[1]);

        $im = imagecreatetruecolor($width + 30, $height+$font_size);
        // Create some colors
        $white = imagecolorallocate($im, 255, 255, 255);
        $black = imagecolorallocate($im, 0, 0, 0);
        imagefilledrectangle($im, 0, 0, $width + 29, $height + $font_size - 1, $white);

        // Add the text
        imagettftext($im, $font_size, 0, 15, $height + $font_size/2, $black, $font, $text);

        // Using imagepng() results in clearer text compared with imagejpeg()
        imagepng($im);
        imagedestroy($im);
        imagecolordeallocate($white);
        imagecolordeallocate($black);
        // Get Image content a variable
        // Clean the output buffer

        //Base64 Encode
?>
