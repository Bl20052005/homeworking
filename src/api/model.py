from PIL import Image
from surya.recognition import RecognitionPredictor
from surya.detection import DetectionPredictor
from surya.texify import TexifyPredictor
from pdf2image import convert_from_path

from PIL import Image, ImageFont, ImageDraw, ImageEnhance

# pil_image_lst = convert_from_path(
#     "src/api/2-Information-4 (1).pdf",
#     poppler_path=r"C:\\Program Files\\poppler-24.08.0\\Library\\bin",
# )  # This returns a list even for a 1 page pdf
# image = pil_image_lst[4]
image = Image.open("src/api/math3.png")

# langs = ["en"]  # Replace with your languages or pass None (recommended to use None)
# recognition_predictor = RecognitionPredictor()
# detection_predictor = DetectionPredictor()

# predictions = recognition_predictor([image], [langs], detection_predictor)

# latex = TexifyPredictor()

# pred = latex([image])

# print(predictions)
# print(pred)

# for i in pred:
#     for j in i.:
#         print(j)
# print(predictions)


im_edit = image.convert("RGBA")
draw = ImageDraw.Draw(im_edit)
draw.rectangle(((0, 00), (100, 100)), fill="black")
image.save("src/api/out.png", "PNG")
