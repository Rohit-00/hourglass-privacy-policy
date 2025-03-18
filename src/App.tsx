function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Hourglass Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Hourglass ("the App") is committed to protecting your privacy. This Privacy Policy explains how we handle 
              information in our completely offline productivity app. By using Hourglass, you agree to the terms outlined here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Data Collection and Storage</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Hourglass operates entirely offline and does not collect, transmit, or store any personal information on external servers. 
                All data remains on your device and is never shared with us or third parties.
              </p>
              <h3 className="text-xl font-medium text-gray-800">2.1 Types of Local Data Stored</h3>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Tasks and their associated tags (productive/unproductive)</li>
                <li>Wake-up time and bedtime preferences</li>
                <li>Time usage statistics and daily summaries</li>
                <li>App configuration settings</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Usage</h2>
            <p className="text-gray-600">
              The data stored locally is used exclusively for:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 mt-2">
              <li>Calculating and displaying time remaining in your day</li>
              <li>Generating productivity reports</li>
              <li>Maintaining your task history</li>
              <li>Personalizing your app experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
            <p className="text-gray-600">
              Your data is stored locally using Expo SQLite and remains on your device. We implement the following security measures:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 mt-2">
              <li>All data is encrypted at rest using device storage encryption</li>
              <li>No internet permissions required - the app cannot transmit data</li>
              <li>No user accounts or cloud synchronization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Deletion</h2>
            <p className="text-gray-600">
              You have full control over your data:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 mt-2">
              <li>Clear all app data through device settings</li>
              <li>Delete individual tasks and entries within the app</li>
              <li>Reset all preferences to default values</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. No Third-Party Sharing</h2>
            <p className="text-gray-600">
              Hourglass does not:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 mt-2">
              <li>Share data with any third parties</li>
              <li>Use analytics or tracking services</li>
              <li>Contain advertising or in-app purchases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              For questions about this privacy policy or data handling:
              <br />
              <a href="mailto:support@hourglassapp.com" className="text-blue-600 hover:text-blue-800">
                support@hourglassapp.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Policy Updates</h2>
            <p className="text-gray-600">
              Changes to this policy will be reflected in app updates. Continued use after updates constitutes acceptance of revised terms.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: 3/18/2025
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Hourglass v1.0 • Offline-First Design • No Data Collection
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;