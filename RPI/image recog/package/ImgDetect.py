import cv2
import imutils


class ImgDetect:

    def __init__(self, path):
        hog = cv2.HOGDescriptor()
        hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
        self.path = path

        # Reading the Image
        img_src = cv2.imread(path, 0)

        # Resizing the Image
        image = imutils.resize(img_src,
                               width=min(400, img_src.shape[1]))

        # Detecting all the regions in the
        # Image that has a pedestrians inside it
        (regions, _) = hog.detectMultiScale(image,
                                            winStride=(4, 4),
                                            padding=(4, 4),
                                            scale=1.05)

        # Drawing the regions in the Image
        for (x, y, w, h) in regions:
            print(x, y, w, h)
            self.a = x
            self.b = y
            self.c = w
            self.d = h
            cv2.rectangle(image, (x, y),
                          (x + w, y + h),
                          (0, 0, 255), 2)

        # Showing the output Image
        cv2.imshow("Image", image)
        cv2.waitKey(0)

        cv2.destroyAllWindows()
    def returnFunc(self):
        if self.c != 0 and self.d != 0:
            return False
        else:
            return True


