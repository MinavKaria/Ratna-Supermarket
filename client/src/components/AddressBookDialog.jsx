import React, { useMemo, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const AddressBookDialog = ({ open, onClose, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const addresses = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('savedAddresses') || '[]');
    } catch (_) {
      return [];
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Choose a delivery location</DialogTitle>
      <DialogContent>
        {addresses.length === 0 ? (
          <p className="text-sm">No saved locations yet. Choose a pincode and area first.</p>
        ) : (
          <div className="flex flex-col gap-2 mt-2">
            {addresses.map((addr, idx) => (
              <button
                key={`${addr.area}-${addr.pincode}-${idx}`}
                onClick={() => setSelectedIndex(idx)}
                className={`text-left border rounded p-2 ${selectedIndex === idx ? 'border-blue-600' : 'border-gray-300'}`}
              >
                <div className="font-medium">{addr.area}</div>
                <div className="text-sm text-gray-600">{addr.pincode} · {addr.label || 'Other'}</div>
              </button>
            ))}
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => {
            onClose();
            onSelect?.({ addNew: true });
          }}
        >
          Add New Location
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (selectedIndex >= 0 && addresses[selectedIndex]) {
              const chosen = addresses[selectedIndex];
              localStorage.setItem('userArea', chosen.area);
              localStorage.setItem('userPincode', chosen.pincode);
              onSelect?.(chosen);
            }
            onClose();
          }}
          disabled={addresses.length === 0 || selectedIndex < 0}
        >
          Use this location
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddressBookDialog;


