#include <FastLED.h>

// LEDs
FASTLED_USING_NAMESPACE
#if defined(FASTLED_VERSION) && (FASTLED_VERSION < 3001000)
#warning "Requires FastLED 3.1 or later; check github for latest code."
#endif
#define DATA_PIN    9
#define LED_TYPE WS2812B
#define COLOR_ORDER GRB
#define NUM_LEDS    59
CRGB leds[NUM_LEDS];
#define BRIGHTNESS          96
#define FRAMES_PER_SECOND  120
int previousLEDrun = false;
int currentLED = 0;
int currentLED2 = 20;

// stepper motors
int incomingByte = 0;
int cabinSteps = 0;
int cabinStepsShort = 0;
const int stepPinRotor = 2;
const int dirPinRotor = 3;
const int stepPinCabin = 4;
const int dirPinCabin = 5;

// general
int rotateCabin = false; // false standing still, true turning
int rotateCabinShort = false;
int motors = true;
int currentStatusLEDs = 0; // 0 off, -1 down, 1 up
unsigned long previousMicros = 0;
unsigned long previousMicros2 = 0;
unsigned long previousMicrosStepRotor = 0;
unsigned long previousMicrosStepCabin = 0;
const long interval = 100000;
const long interval500 = 1000;
int showLEDVorne = false;
int showLEDHinten = false;
int stepHighRotor = false;
int stepHighCabin = false;


void setup() {
  FastLED.addLeds<LED_TYPE, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(BRIGHTNESS);
  pinMode(stepPinCabin, OUTPUT);
  pinMode(dirPinCabin, OUTPUT);
  pinMode(stepPinRotor, OUTPUT);
  pinMode(dirPinRotor, OUTPUT);
  Serial.begin(9600);
  Serial.print("los");

  digitalWrite(dirPinRotor, LOW);
  digitalWrite(dirPinCabin, LOW);
}


void loop()
{
  unsigned long currentMicros = micros();
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
  }

  if (incomingByte == 49) {
    incomingByte = 0;
    if(motors){
      rotateCabin = true;
      }
     else {};
  }

  if (incomingByte == 50) {
    incomingByte = 0;
    showLEDVorne = true;
    Serial.print("los");
  }

  if (incomingByte == 51) {
    incomingByte = 0;
    showLEDHinten = true;
  }

  if (incomingByte == 52) {
    incomingByte = 0;
     if(motors){
      rotateCabinShort = true;
      }
     else {};
  }

  if (incomingByte == 53) {
    incomingByte = 0;
    if(motors){
      motors = false;
      }
     else {motors = true;};
  }

  if (showLEDVorne && currentLED <= 20 && currentMicros - previousMicros >= interval) {
    previousMicros = currentMicros;
    leds[currentLED] = CRGB::Red;
    leds[currentLED - 1] = CRGB( 30, 0, 0);
    FastLED.show();
    //FastLED.delay(100/FRAMES_PER_SECOND);
    // clear this led for the next time around the loop
    leds[currentLED] = CRGB::Black;
    leds[currentLED - 1] = CRGB::Black;
    //delay(100);
    currentLED++;
  } else if (currentLED == 20) {
    showLEDVorne = false;
    leds[currentLED + 2] = CRGB::Black;
    leds[currentLED + 1] = CRGB::Black;
    leds[currentLED] = CRGB::Black;
    leds[currentLED - 1] = CRGB::Black;
    leds[currentLED - 2] = CRGB::Black;
    leds[currentLED - 3] = CRGB::Black;
    leds[currentLED - 4] = CRGB::Black;
    leds[currentLED - 5] = CRGB::Black;
    FastLED.show();
    currentLED = 0;
  }

  if (showLEDHinten && currentLED2 >= 0 && currentMicros - previousMicros2 >= interval) {
    previousMicros2 = currentMicros;
    leds[currentLED2] = CRGB(30, 0, 0);
    leds[currentLED2 - 1] = CRGB::Red;
    FastLED.show();
    // clear this led for the next time around the loop
    leds[currentLED2] = CRGB::Black;
    leds[currentLED2 - 1] = CRGB::Black;
    currentLED2--;
  } else if (currentLED2 == 0) {
    showLEDHinten = false;
    leds[currentLED + 2] = CRGB::Black;
    leds[currentLED + 1] = CRGB::Black;
    leds[currentLED] = CRGB::Black;
    leds[currentLED - 1] = CRGB::Black;
    leds[currentLED - 2] = CRGB::Black;
    leds[currentLED - 3] = CRGB::Black;
    leds[currentLED - 4] = CRGB::Black;
    leds[currentLED - 5] = CRGB::Black;
    FastLED.show();
    currentLED2 = 20;
  };

  if (motors && rotateCabin && cabinSteps <= 3200) {
    cabinStep(currentMicros);
    rotorStep(currentMicros);
  }
  else if (motors && rotateCabinShort && cabinStepsShort <= 1000) {
    cabinStepShort(currentMicros);
    rotorStep(currentMicros);
  }
  else if(motors) {
    rotorStep(currentMicros);
    rotateCabin = false;
    rotateCabinShort = false;
    cabinSteps = 0;
    cabinStepsShort = 0;
  }
  else {}
}

void rotorStep(unsigned long currentMicros) {
  if (!stepHighRotor && currentMicros - previousMicrosStepRotor >= interval500) {
    digitalWrite(stepPinRotor, HIGH);
    previousMicrosStepRotor = currentMicros;
    stepHighRotor = true;
  }
  else if (stepHighRotor && currentMicros - previousMicrosStepRotor >= interval500) {
    digitalWrite(stepPinRotor, LOW);
    previousMicrosStepRotor = currentMicros;
    stepHighRotor = false;
  }
}

void cabinStep(unsigned long currentMicros) {
  if (!stepHighCabin && currentMicros - previousMicrosStepCabin >= interval500) {
    digitalWrite(stepPinCabin, HIGH);
    previousMicrosStepCabin = currentMicros;
    stepHighCabin = true;
    cabinSteps ++;
  }
  if (stepHighCabin && currentMicros - previousMicrosStepCabin >= interval500) {
    digitalWrite(stepPinCabin, LOW);
    previousMicrosStepCabin = currentMicros;
    stepHighCabin = false;
  }
}

void cabinStepShort(unsigned long currentMicros) {
  if (!stepHighCabin && currentMicros - previousMicrosStepCabin >= interval500) {
    digitalWrite(stepPinCabin, HIGH);
    previousMicrosStepCabin = currentMicros;
    stepHighCabin = true;
    cabinStepsShort ++;
  }
  if (stepHighCabin && currentMicros - previousMicrosStepCabin >= interval500) {
    digitalWrite(stepPinCabin, LOW);
    previousMicrosStepCabin = currentMicros;
    stepHighCabin = false;
  }
}
