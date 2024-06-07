const SOLUTIONS = [
    { id: 'vCiso', label: 'vCiso' },
    { id: 'awarenessTraining', label: 'Awareness Training' },
    { id: 'mfaSso', label: 'MFA / SSO' },
    { id: 'emailSecurity', label: 'Email Security' },
    { id: 'iam', label: 'IAM' },
    { id: 'managedEdr', label: 'Managed EDR' },
    { id: 'patching', label: 'Patching' },
    { id: 'vpn', label: 'VPN' },
    { id: 'firewall', label: 'Firewall' },
    { id: 'managedSiem', label: 'Managed SIEM' },
    { id: 'incidentResponse', label: 'Incident Response' },
    { id: 'vmDbBackup', label: 'VM/DB Backup' },
    { id: 'phishingTests', label: 'Phishing Tests' },
    { id: 'managedPatching', label: 'Managed Patching' },
    { id: 'penTest', label: 'Pen Test' },
    { id: 'ztna', label: 'ZTNA' },
    { id: 'codeTesting', label: 'Code Testing' },
    { id: 'botManagement', label: 'Bot Management' },
    { id: 'managedFirewall', label: 'Managed Firewall' },
    { id: 'networkIntelligence', label: 'Network Intelligence' },
    { id: 'dns', label: 'DNS' },
    { id: 'ddos', label: 'DDoS' },
    { id: 'ddosTesting', label: 'DDoS Testing' },
    { id: 'pam', label: 'PAM' },
    { id: 'impersonation', label: 'Impersonation' },
    { id: 'drPlanAndRehearsals', label: 'DR Plan and Rehears' },
    { id: 'staffingAndRecruiting', label: 'Staffing and Recruiting' },
    { id: 'attackSurfaceManagement', label: 'Attack Surface Mngmt' },
    { id: 'sse', label: 'SSE' },
    { id: 'soc', label: 'SOC' },
    { id: 'managedGrc', label: 'Managed GRC' },
    { id: 'managedControlsAssurance', label: "Mng'd Controls Assurance" },
    { id: 'dataIdAndClassification', label: 'Data ID and Class' },
    { id: 'microsegmentation', label: 'Microsegmentation' },
    { id: 'policyEnforcement', label: 'Policy Enforcement' },
    { id: 'bugBounty', label: 'Bug Bounty' },
    { id: 'otSecurity', label: 'OT Security' },
    { id: 'apiDiscovery', label: 'API Discovery' },
    { id: 'apiProtection', label: 'API Protection' },
    { id: 'dataLossPrevention', label: 'Data Loss Prevention' },
    { id: 'darkWebScanning', label: 'Dark Web Scanning' },
    { id: 'ransomwareNegotiation', label: 'Ransom Negotiation' },
    { id: 'deviceBackups', label: 'Device Backups' },
    { id: 'cloudRecovery', label: 'Cloud Recovery' },
    { id: 'draas', label: 'DR-aaS' },
    { id: 'tapeBackup', label: 'Tape Backup' }
];

const STATES = [
    { idSuffix: 'current', label: 'Current State', color: '#355bb7' },
    { idSuffix: 'ideal', label: 'Ideal State', color: '#ff0000' },
    { idSuffix: 'next', label: 'Next State', color: '#00ff00' }
];

document.addEventListener('DOMContentLoaded', () => {
    const unorderedListElement = document.getElementById('solution-checkboxes');
    SOLUTIONS.forEach(solution => {
        const listItemElement = document.createElement('li');

        const checkboxes = [];

        STATES.forEach(state => {
            const stateId = `${solution.id}-${state.idSuffix}`;
            const svgRect = document.getElementById(stateId);

            // Hide all svg elements by default
            svgRect.classList.add('hide-solution');

            // Create elements for each state
            const labelElement = document.createElement('label');
            const inputElement = document.createElement('input');

            // Set attributes on elements
            inputElement.type = 'checkbox';
            inputElement.id = `${stateId}-checkbox`;
            labelElement.htmlFor = `${stateId}-checkbox`;
            labelElement.textContent = `${solution.label} (${state.label})`;

            // Store checkbox references
            checkboxes.push(inputElement);

            // Append elements to li
            listItemElement.appendChild(inputElement);
            listItemElement.appendChild(labelElement);

            // Add event listener to show/hide matching svg rect and disable other checkboxes
            inputElement.addEventListener('change', () => {
                if (inputElement.checked) {
                    svgRect.classList.remove('hide-solution');
                    svgRect.setAttribute('fill', state.color);

                    // Disable other checkboxes
                    checkboxes.forEach(cb => {
                        if (cb !== inputElement) {
                            cb.disabled = true;
                        }
                    });
                } else {
                    svgRect.classList.add('hide-solution');

                    // Enable all checkboxes
                    checkboxes.forEach(cb => {
                        cb.disabled = false;
                    });
                }
            });
        });

        // Append li to ul
        unorderedListElement.appendChild(listItemElement);
    });
});
