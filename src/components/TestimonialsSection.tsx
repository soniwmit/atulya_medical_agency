import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  MessageCirclePlus, 
  X,
  Send
} from 'lucide-react';
import { TESTIMONIALS_LIST, BUSINESS_INFO } from '../data/pharmacyData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS_LIST);
  const [filterRating, setFilterRating] = useState<number>(0);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('Paliganj');
  const [newRating, setNewRating] = useState(5);
  const [newReview, setNewReview] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filteredReviews = filterRating > 0 
    ? reviews.filter(r => r.rating === filterRating)
    : reviews;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newReview.trim()) return;

    const newEntry: Testimonial = {
      id: Date.now().toString(),
      name: newName,
      location: newLocation,
      rating: newRating,
      date: 'Just now',
      review: newReview,
      verified: true
    };

    setReviews([newEntry, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewName('');
      setNewReview('');
    }, 1800);
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
              Verified Patient Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white mt-3">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Read real feedback from patients, families, and doctors in Paliganj, Bihar.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterRating(filterRating === 5 ? 0 : 5)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                filterRating === 5
                  ? 'bg-amber-500 text-white border-amber-500'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>5-Star Only ({reviews.filter(r => r.rating === 5).length})</span>
            </button>

            <button
              onClick={() => setShowReviewModal(true)}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <MessageCirclePlus className="w-3.5 h-3.5" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-200 dark:text-slate-700 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-2">
                    {item.rating}.0
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1">
                    <span>{item.name}</span>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline" title="Verified Customer" />
                    )}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative animate-scaleIn">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-1">
              Write a Review for Atulya Medical Agency
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Share your experience with our store, staff, or medicine service in Paliganj.
            </p>

            {submittedMessage ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 rounded-2xl text-center text-xs font-bold border border-emerald-300 dark:border-emerald-800 my-6">
                Thank you! Your review has been added successfully.
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Singh"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Location in Paliganj
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Paliganj Bazar / Dharhara"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 text-amber-400 focus:outline-none"
                      >
                        <Star className={`w-6 h-6 ${star <= newRating ? 'fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Feedback / Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Write a few lines about our medicine availability, staff polite behavior, or fast service..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Review</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
