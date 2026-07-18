#Digital PiggyBank Calculator and Tracker
> Save now and save your life from future misery

Digital PiggyBank Calculator and Tracker is a bold, neubrutalist web application designed to help people track their savings milestones over time with real-time logging, custom currency configurations, and a bit of playful Nigerian slang motivation.
Important Note: This application acts as a Digital Financial Ledger. It doesn't connect to a real bank or physically hold your money. Instead, it serves as a visual, interactive companion to track your real-world financial discipline.

How to Use It
1. Take the Physical Action: When you earn money in the real world (e.g., getting a ₦5,000 note, receiving $10 as a gift from your uncle, or earning money from a side hustle), put that physical cash into a real-life piggy bank or deposit it into your actual bank account.
2. Set a Target on the Web App: Open your tracker site, enter what you are saving for (e.g., "Laptop"), choose your localized currency layout (₦, $, £, CA$, or €), and input your target savings amount. Click 'Set Goal'.
3. Log the Transaction: Type the amount you just set aside (`10` or `5000`) into the depositor section. 
4. Add Context: Use the built-in calendar selector to pick the transaction date, and add an optional note (like "Cash from uncle" or "Side hustle profit") to remember exactly where the money came from.
5. Monitor Progress: Click 'Deposit' to watch the animated progress bar spring forward and see your entry pop instantly into the persistent tracking ledger.
6. Switch Themes / Reset: Toggle between light and dark mode using the theme controller at the top, or use the reset button to purge the database and start a fresh goal.

Features & Benefits
- Persistent Local Account Database: Uses the browser's `localStorage` API so that your goals, currency layouts, dark mode preferences, and history logs are completely saved even if you refresh or close the tab.
- Micro-interactive Neubrutalist UI: Designed with springy button interactions and an actively animated candy-stripe progress bar to make updating your financial logs feel tactile and satisfying.
- Dynamic Slang Coaching: Includes automatic threshold analysis that reacts to your progress. If you are under 20%, it alerts you with "Omor, you never start o"—and once you cross the finish line, it celebrates with "You don land! 🎉". English translations of some pidgin texts used are built-in right underneath for global accessibility.
- Zero Server Overhead: Built purely with Vanilla HTML, CSS, and JavaScript—meaning it runs instantly in any modern web browser with zero loading lag.

How I Built It (My Tech Stack)
- HTML5: For the layout structure and semantic form controls.
- CSS3 (Custom Variables & Keyframes): For the bold neubrutalist theme components, spring-physics micro-interactions, and moving linear-gradient animations.
- Vanilla JavaScript: For state management routing, input mathematical validation, object parsing, and browser storage integration.
