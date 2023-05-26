import random
import time

worker_sentences = [
    "We have strict security measures in place to protect the nuclear facility. I mean, we even have a bouncer at the entrance. He checks IDs and dance moves.",
    "The nuclear reactor is operating at full capacity. It's like the Energizer Bunny on steroids, just keeps going and going.",
    "Somebody needs to clean the reactor, who is in line? I swear, it's like trying to assign chores to a bunch of teenagers. Good luck with that!",
    "I heard that the facility is equipped with state-of-the-art radiation detectors. I mean, they probably have a Geiger counter that doubles as a disco ball. Safety first, but let's party!",
    "All personnel must undergo thorough background checks before entering the facility and that's so yesterday... I guess it's time to dig up those old embarrassing photos from college, huh?",
    "They said that there are regular drills to ensure preparedness in case of emergencies. But I don't believe so. Last time, it was like watching a group of penguins try to do synchronized swimming.",
    "The cooling system is critical for maintaining the stability of the nuclear reactor or Chernobyl will happen again... Let's just hope it's not a 'hot' topic of conversation at the next company picnic.",
    "Our most experienced member is the janitor... Yep, you heard that right. Forget about years of specialized training, it's all about mopping skills in this place.",
    "Access to the control room is restricted to authorized personnel only. It's like trying to get into a secret club where the password is 'I promise not to blow anything up.'",
    "The nuclear facility complies with all regulatory guidelines and standards. Well, except for that one time when we accidentally turned a conference room into a makeshift karaoke bar. It was a blast!",
    "Proper handling and disposal of radioactive waste is of utmost importance. We're like the Marie Kondos of the nuclear world - we always make sure everything sparks joy... or at least doesn't cause mutations.",
    "Emergency shutdown procedures are in place to prevent any accidents. It's like the nuclear version of the 'Stop, Drop, and Roll' rule. Except here, it's more like 'Panic, Scream, and Pray.'",
    "We follow strict protocols for the transportation of nuclear materials. It's like a secret mission, only instead of spies, we have highly trained delivery drivers. Don't mess with the nuclear pizza delivery guy!",
    "The facility has multiple layers of physical and digital security systems. It's like trying to break into Fort Knox, but with extra radioactive glow. Good luck to any would-be thieves!",
    "Continuous training is provided to employees to enhance safety awareness. We take it to the extreme, like those intense workout videos, but instead of abs, we're building muscles to handle radioactive situations.",
    "The nuclear facility plays a crucial role in generating clean energy. We're like the superheroes of electricity, fighting climate change one radioactive atom at a time. It's a dirty job, but someone's gotta do it!",
    "We have a zero-tolerance policy for any safety violations within the facility. So, if you even think about sneezing without covering your mouth, you'll have to face the wrath of the radioactive safety police.",
    "Regular maintenance and inspections are carried out to ensure equipment reliability. It's like giving your car a regular oil change, except here we're dealing with machines that have a little more 'boom' potential.",
    "Our team is prepared to respond to any potential nuclear incidents. It's like a high-stakes game of Whack-a-Mole, except instead of moles, we're dealing with radioactive leaks. Fun times, right?",
    "We work closely with regulatory agencies to maintain the highest safety standards. It's like having an overbearing parent who constantly checks if you've brushed your teeth. Except in this case, it's all about preventing meltdowns."
]

random.shuffle(worker_sentences)


def send_message(sender, recipient, message):
    print(f"\n[Message Sent] From: {sender}\n[Message Sent] To: {recipient}\n[Message Sent] Message: {message}\n")
    time.sleep(1)  # Simulating message sending delay

def receive_message(sender, recipient, message):
    print(f"\n[Message Received] From: {sender}\n[Message Received] To: {recipient}\n[Message Received] Message: {message}\n")
    time.sleep(1)  # Simulating message receiving delay

def perform_social_engineering():
    # Step 1: Set up the conversation
    print("Connecting to the secured node...")
    time.sleep(1)
    worker_name = "John"  # Worker's name (can be customized)
    attacker_name = input("Enter your name: ")
    print(f"\nWelcome, {attacker_name}! You are now connected with {worker_name}.\n")

    # Step 2: Conversation loop
    while True:
        # Attacker sends a message
        attacker_message = input(f"{attacker_name}: ")
        send_message(attacker_name, worker_name, attacker_message)

        # Check if the attacker convinces the worker to give access to a file
        if "i want to go home" in attacker_message.lower():
            send_message(worker_name, attacker_name, "same my dude, let me show you something cool")
            time.sleep(2)
            print(f"\n{worker_name} is sending a message...\n")
            time.sleep(2)
            print(f"\nThe Tor Node is being changed please wait...\n")
            time.sleep(2)
            print(f"\nNo internet connection.\n")
            time.sleep(5)
            print(f"\nSecured Internet connection thorugh Frankfurt Tor node was re-established\n")
            time.sleep(2)
            send_message(worker_name, attacker_name, "Check this out, I found this link http://192.168.10.69:3131 when looking through files, it looks so 2000'")
        else:
            # Worker responds
            response = random.choice(worker_sentences)
            send_message(worker_name, attacker_name, response)


# Main program
print("==== Private communication line ====")
print("You are being connected to the private chat.")
print("Follow the instructions carefully.\n")

try:
    while True:
        choice = input("Enter 'start' to get logged in into the secured conversation node or 'exit' to quit: ")
        if choice.lower() == 'start':
            perform_social_engineering()
        elif choice.lower() == 'exit':
            break
        else:
            print("Invalid choice. Please try again.\n")
except KeyboardInterrupt:
    print("\nChat disconnected...")